import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata',
  }).format(date);
}

export function categoryId(category: string) {
  return category.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

export function readingMinutes(body = '') {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function postTopics(post: CollectionEntry<'blog'>) {
  return [...new Set([...post.data.tags, ...post.data.categories])];
}

export function postDescription(post: CollectionEntry<'blog'>) {
  if (post.data.description) return post.data.description;
  const text = (post.body || '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_`>]/g, '')
    .replace(/\s+/g, ' ').trim();
  return text.length <= 180 ? text : `${text.slice(0, 180).replace(/\s+\S*$/, '')}…`;
}
