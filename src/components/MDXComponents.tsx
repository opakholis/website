import * as React from 'react';
import Link from 'next/link';
import { ImageProps } from 'next/image';
import { BlurImage } from '~/components/BlurImage';

export const components = {
  h1: (props: any) => <h1 className="mt-12 mb-5" {...props} />,
  h2: (props: any) => <h2 className="mt-12 mb-5" {...props} />,
  h3: (props: any) => <h3 className="mt-12 mb-5" {...props} />,
  h4: (props: any) => <h4 className="mt-6 mb-5" {...props} />,
  p: (props: any) => <p className="mb-5 leading-8" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a
          className="link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return <Link href={href} passHref className="link" {...props} />;
  },
  Img: ({ children, ...props }: { children: React.ReactNode } & ImageProps) => {
    return (
      <figure className="my-8 lg:-mx-12">
        <BlurImage {...props} />

        {children ? (
          <figcaption className="mt-2 text-center text-sm italic text-zinc-500 dark:text-zinc-400">
            {children}
          </figcaption>
        ) : null}
      </figure>
    );
  },
  img: ({ children, ...props }: { children: React.ReactNode } & ImageProps) => (
    <div className="my-8">
      <BlurImage {...props} />
    </div>
  )
};
