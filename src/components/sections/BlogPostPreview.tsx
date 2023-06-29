import Link from 'next/link';
import { Blog } from 'contentlayer/generated';
import { formatDate } from '~/utils/formatDate';

type BlogProps = Pick<Blog, 'title' | 'slug' | 'publishedAt'>;

export function BlogPostPreview(post: BlogProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex justify-between border-t border-zinc-100 py-5 dark:border-zinc-800"
    >
      <p className="text-zinc-800 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-200">
        {post.title}
      </p>
      <p>{formatDate(post.publishedAt)}</p>
    </Link>
  );
}
