import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const output = path => read(`dist/${path}`);

test('Genesis retains the original article text, timestamp, and categories', () => {
  const old = read('tests/fixtures/genesis-original.txt');
  const migrated = read('posts/genesis.md');
  assert.equal(migrated.split('---').slice(2).join('---'), old.split('---').slice(2).join('---'));
  assert.match(migrated, /date: 2022-03-27T11:08:16\+05:30/);
  assert.match(migrated, /tags: \[All, Personal\]/);
  const article = output('blog/genesis/index.html');
  assert.match(article, /Genesis - the beginning/);
  assert.match(article, /2022-03-27T05:38:16.000Z/);
  assert.match(article, /https:\/\/vijaynr.github.io\/blog\/genesis\//);
});

test('legacy URLs are emitted as redirect pages', () => {
  const redirects = [
    ['all/personal/2022/03/27/genesis.html', '/blog/genesis/'],
    ['posts/index.html', '/blog/'],
    ['about/index.html', '/#background'],
    ['projects/index.html', '/#work'],
    ['projects/personal_portfolio/index.html', '/#work'],
  ];
  for (const [path, destination] of redirects) {
    const html = output(path);
    assert.match(html, /http-equiv="refresh"/i, path);
    assert.ok(html.includes(destination), path);
  }
});

test('RSS and categories use the migrated article URL', () => {
  const feed = output('feed.xml');
  assert.match(feed, /<rss/);
  assert.match(feed, /https:\/\/vijaynr.github.io\/blog\/genesis\//);
  assert.match(feed, /Sun, 27 Mar 2022 05:38:16 GMT/);
  assert.match(output('categories/index.html'), /id="personal"/);
  assert.match(output('categories/index.html'), /id="Personal"/);
});

test('portfolio and retained assets are in the static build', () => {
  const home = output('index.html');
  for (const id of ['experience', 'work', 'background', 'blog', 'contact']) {
    assert.ok(home.includes(`id="${id}"`), id);
  }
  for (const path of ['docs/resume.pdf', 'assets/images/vijayasankar-portrait.webp', 'assets/picture.png', 'favicon.svg', 'html/projects/debt_payoff_calc.html', '404.html', '.nojekyll']) {
    assert.ok(existsSync(new URL(`../dist/${path}`, import.meta.url)), path);
  }
});

function* htmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (path.endsWith('.html')) yield path;
  }
}

test('all generated root-relative links and assets resolve to built files', () => {
  for (const path of htmlFiles(new URL('../dist/', import.meta.url).pathname)) {
    const html = readFileSync(path, 'utf8');
    for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"\s]*)"/g)) {
      if (url.startsWith('//')) continue;
      const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
      const file = join('dist', pathname);
      assert.ok(existsSync(file) || existsSync(join(file, 'index.html')), `${path}: ${url}`);
    }
  }
});


test('homepage includes recent writing and navigates through its blog section', () => {
  const home = output('index.html');
  assert.match(home, /href="\/#blog"/);
  assert.match(home, /id="blog"/);
  const blog = home.slice(home.indexOf('id="blog"'), home.indexOf('id="contact"'));
  assert.match(blog, /Genesis - the beginning/);
  assert.match(blog, /href="\/blog\/genesis\/"/);
  assert.match(blog, /href="\/blog\/"[^>]*aria-label="View more blog posts"/);
  assert.match(blog, /<h3[^>]*class="post-title"/);
});
