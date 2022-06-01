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
        <KBarAnimator className="w-full max-w-lg rounded-lg border bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
          <div className="mb-1.5 flex items-center justify-between border-b p-4 dark:border-zinc-700">
            <KBarSearch className="w-full border-none bg-transparent text-sm focus:outline-none" />
            <button
              onClick={query.toggle}
              className={cn(
                'rounded border border-zinc-500/30 py-1 px-1.5 text-[10px] font-medium transition duration-300',
                'focus:outline-none focus:ring-1 focus:ring-zinc-300',
                'dark:border-zinc-700 dark:focus:ring-zinc-500'
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
