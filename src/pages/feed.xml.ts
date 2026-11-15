import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts, postTopics, postDescription } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'Vijayasankar Ravindran — Blog',
    description: 'Writing about software engineering, learning, and life.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: postDescription(post),
      pubDate: post.data.pubDate,
      categories: postTopics(post),
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en</language>',
  });
}
