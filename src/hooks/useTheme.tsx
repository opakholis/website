import { useRegisterActions } from 'kbar';
import { useTheme } from 'next-themes';

import {
  KbarParents as parents,
  KbarSections as sections
} from '~/lib/constants';

import { Palette } from '~/components/icons';

export function useThemeAction() {
  const { setTheme } = useTheme();

  useRegisterActions([
    {
      id: 'theme',
      name: 'Ubah Tema...',
      keywords: 'change-theme',
      shortcut: ['g', 't'],
      section: sections.extras,
      icon: <Palette />
    },
    {
      id: 'dark-mode',
      name: 'Gelap',
      keywords: 'dark',
      perform: () => setTheme('dark'),
      parent: parents.theme
    },
    {
      id: 'light-mode',
      name: 'Terang',
      keywords: 'light',
      perform: () => setTheme('light'),
      parent: parents.theme
    },
    {
      id: 'theme-system',
      name: 'Default',
      keywords: 'system',
      perform: () => setTheme('system'),
      parent: parents.theme
    }
  ]);
}
