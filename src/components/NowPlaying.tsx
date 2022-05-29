import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';

import fetcher from '~/lib/fetcher';
import { NowPlayingProps } from '~/lib/types';

import { Spotify } from '~/components/icons';

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingProps>('/api/now-playing', fetcher);

  return (
    <div className="flex w-3/4 items-center space-x-2">
      {data?.songUrl ? <AnimatedBars /> : <Spotify className="h-4 w-4" />}
      {data?.songUrl ? (
        <a
          className="max-w-max truncate"
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.title}
          <span className="hidden md:inline"> - {data.artist}</span>
        </a>
      ) : (
        <p>Not Playing - Spotify</p>
      )}
    </div>
  );
}

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="flex items-end space-x-0.5 overflow-hidden">
      <span id="bar1" className="h-2 w-1 bg-zinc-500/70 dark:bg-zinc-400/70" />
      <span id="bar2" className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400" />
      <span id="bar3" className="h-3 w-1 bg-zinc-500/80 dark:bg-zinc-400/80" />
    </div>
  );
}
