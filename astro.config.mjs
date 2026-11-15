import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vijaynr.github.io',
  trailingSlash: 'always',
  output: 'static',
  redirects: {
    '/posts/': '/blog/',
    '/about/': '/#background',
    '/projects/': '/#work',
    '/projects/personal_portfolio': '/#work',
  },
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
