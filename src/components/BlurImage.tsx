import * as React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ImageProps } from 'next/image';

export function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={cn(
        'flex overflow-hidden bg-white/[2%]',
        isLoading ? 'animate-pulse' : ''
      )}
    >
      {/* eslint-disable-next-line  */}
      <Image
        {...props}
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-105 blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
