import { KBarResults, useMatches } from 'kbar';

import { ResultItem } from './ResultItem';

export function RenderResults() {
  const { results, rootActionId } = useMatches();
  return (
    <div className="px-2 pb-2 pt-0">
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === 'string' ? (
            <div className="p-2 text-xs font-medium text-zinc-400 dark:text-zinc-500">
              {item}
            </div>
          ) : (
            <ResultItem
              action={item}
              active={active}
              currentRootActionId={rootActionId}
            />
          )
        }
      />
    </div>
  );
}
