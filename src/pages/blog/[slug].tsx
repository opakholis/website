import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs, Blog } from 'contentlayer/generated';

import { formatDate } from '~/utils/formatDate';
import { components } from '~/components/MDXComponents';
import { Layout } from '~/components/layouts';
import { BlogSeo } from '~/components/Seo';

export default function PostPage({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  const url = `https://opakholis.space/blog/${post.slug}`;

  return (
    <>
      <BlogSeo
        title={post.title}
        url={url}
        description={post.summary}
        date={post.publishedAt}
      />

      <Layout>
        <article className="prose prose-zinc mb-16 dark:prose-invert">
          <div className="pb-4">
            <h1 className="not-prose mb-2">{post.title}</h1>
            <div className="text-zinc-500 dark:text-zinc-400">
              {formatDate(post.publishedAt, true)}
            </div>
          </div>
          <MDXContent
            components={{
              ...components
            }}
          />
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({
      params: {
        slug: p.slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<{ post: Blog }> = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  return { props: { post } };
};
