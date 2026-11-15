import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

test('flat-folder Markdown publishes metadata, limits previews, and keeps drafts private', () => {
  // Build a disposable copy so verification never creates posts in the live checkout.
  const fixture = mkdtempSync(join(tmpdir(), 'vijay-blog-authoring-'));
  try {
    for (const path of ['src', 'public', 'posts', 'package.json', 'astro.config.mjs', 'tsconfig.json']) {
      cpSync(join(root, path), join(fixture, path), { recursive: true });
    }
    symlinkSync(join(root, 'node_modules'), join(fixture, 'node_modules'), 'dir');
    const add = (name, markdown) => {
      const path = join(fixture, 'posts', name);
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, markdown);
    };
    add('metadata-example.md', `---
title: "Metadata example"
date: 2026-11-15
owner: "Guest Writer"
tags: [Architecture]
customNote: "Extra YAML is accepted"
---

An automatically generated excerpt from a Markdown file in the top-level posts folder.
`);
    add('second-example.md', '---\ntitle: "Second example"\ndate: 2026-11-14\n---\n\nA second published entry.');
    add('legacy-example.md', '---\ntitle: "Legacy example"\npubDate: 2026-11-13\ncategories: [Legacy]\n---\n\nA compatible older front-matter format.');
    add('private-example.md', '---\ntitle: "Private draft"\ndate: 2026-11-15\ntags: [Private]\ndraft: true\n---\n\nUnpublished content.');
    add('nested/ignored-example.md', '---\ntitle: "Nested entry"\ndate: 2026-11-15\n---\n\nOnly the flat folder is loaded.');
    execFileSync(process.execPath, [realpathSync(join(root, 'node_modules/.bin/astro')), 'build'], {
      cwd: fixture,
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
      stdio: 'pipe',
    });
    const output = path => readFileSync(join(fixture, 'dist', path), 'utf8');
    const article = output('blog/metadata-example/index.html');
    assert.match(article, /Guest Writer/);
    assert.match(article, /"author":\{"@type":"Person","name":"Guest Writer"/);
    assert.match(article, /15 November 2026|November 15, 2026/);
    assert.match(article, /An automatically generated excerpt/);
    assert.match(output('categories/index.html'), /id="architecture"/);
    assert.match(output('feed.xml'), /blog\/metadata-example\//);
    const home = output('index.html');
    const preview = home.slice(home.indexOf('id="blog"'), home.indexOf('id="contact"'));
    assert.match(preview, /Metadata example/);
    assert.match(preview, /Second example/);
    assert.match(preview, /Legacy example/);
    assert.ok(preview.indexOf('Metadata example') < preview.indexOf('Second example'));
    assert.doesNotMatch(preview, /Genesis - the beginning/);
    assert.match(output('blog/index.html'), /Genesis - the beginning/);
    assert.ok(!existsSync(join(fixture, 'dist/blog/private-example')));
    assert.ok(!existsSync(join(fixture, 'dist/blog/nested')));
    for (const path of ['index.html', 'blog/index.html', 'categories/index.html', 'feed.xml']) {
      assert.doesNotMatch(output(path), /Private draft|Unpublished content|Nested entry/);
    }
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});
