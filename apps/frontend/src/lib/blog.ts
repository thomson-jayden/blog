import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export const categories = ['Tech', 'Travel', 'Projects', 'Life'] as const;

export function sortPosts(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

export function featuredPost(posts: BlogPost[]) {
  const ordered = sortPosts(posts);
  return ordered.find((post) => post.data.featured) ?? ordered[0];
}

export function relatedPosts(current: BlogPost, posts: BlogPost[]) {
  return sortPosts(posts.filter((post) => post.id !== current.id))
    .sort(
      (a, b) =>
        Number(b.data.category === current.data.category) -
        Number(a.data.category === current.data.category),
    )
    .slice(0, 3);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function pageUrl(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
