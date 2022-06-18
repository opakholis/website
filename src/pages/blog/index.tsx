import { InferGetStaticPropsType } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';

import { Layout } from '~/components/layouts';
import { BlogPostPreview } from '~/components/sections/BlogPostPreview';
import { PageSeo } from '~/components/Seo';

const meta = {
  title: 'Tulisan',
  description: 'Kadang kepingin nulis untuk menjadikannya sebagai habit.'
};

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSeo title={meta.title} description={meta.description} />
      <Layout>
        <div className="space-y-4">
          <h1 className="font-medium text-zinc-800 dark:text-white">
            {meta.title}
          </h1>
          <p>
            {meta.description} Biasanya membahas teknologi, ide-ide dan
            pemikiran pribadi
          </p>
        </div>

        <div className="mt-16">
          {posts.map((post) => (
            <BlogPostPreview key={post.slug} {...post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
