import React from 'react';
import { useKBar } from 'kbar';

import { Command } from '~/components/icons';

export function Header() {
  const { query } = useKBar();

  return (
    <header className="pt-6 lg:pt-8">
      <button
        onClick={query.toggle}
        aria-label="Toggle Menu"
        className="d duration-400 rounded-lg p-2 transition hover:ring-1 hover:ring-zinc-500/30 focus:outline-none dark:hover:ring-zinc-400/40"
      >
        <Command className="h-4 w-4 text-zinc-800 dark:text-white" />
      </button>
    </header>
  );
}
