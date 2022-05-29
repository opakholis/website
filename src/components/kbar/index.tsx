import cn from 'classnames';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  useKBar
} from 'kbar';

import { useThemeAction } from '~/hooks/useTheme';
import { RenderResults } from './RenderResults';

export function CommandBar() {
  const { query } = useKBar();

  useThemeAction();

  return (
    <KBarPortal>
      <KBarPositioner className="bg-black/30 backdrop-blur-sm dark:bg-black/50">
        <KBarAnimator className="w-full max-w-md rounded-lg bg-white shadow-xl dark:bg-zinc-900">
          <div className="flex items-center justify-between p-4">
            <KBarSearch className="w-full border-0 bg-transparent text-sm focus:outline-none" />
            <button
              onClick={query.toggle}
              className={cn(
                'rounded border border-zinc-500/30 p-1 text-[10px] font-medium transition duration-300',
                'hover:shadow-lg focus:border-sky-500/30 focus:outline-none',
                'dark:border-zinc-400/40 dark:focus:border-sky-400/40'
              )}
            >
              ESC
            </button>
          </div>
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}
