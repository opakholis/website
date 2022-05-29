import '~/styles/globals.css';
import '~/styles/prose.css';
import '~/styles/fonts.css';

import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Action, KBarProvider } from 'kbar';

import { KbarSections as sections } from '~/lib/constants';
import { Github, Home, Pencil, Polywork, Twitter } from '~/components/icons';
import { CommandBar } from '~/components/kbar';
import { SEO } from '~/components/Seo';

const App = ({ Component, pageProps }: AppProps) => {
  const { push } = useRouter();

  // Actions
  const actions: Action[] = [
    {
      id: 'navigate-home',
      name: 'Home',
      keywords: 'back home',
      shortcut: ['g', 'h'],
      icon: <Home />,
      perform: () => push('/'),
      section: sections.navigate
    },
    {
      id: 'navigate-blog',
      name: 'Tulisan',
      keywords: 'blog posts',
      shortcut: ['g', 'b'],
      icon: <Pencil />,
      perform: () => push('/blog'),
      section: sections.navigate
    },
    {
      id: 'github',
      name: 'Github',
      keywords: 'go-github',
      section: sections.social,
      icon: <Github />,
      perform: () => window.open('https://github.com/opakholis', '_blank')
    },
    {
      id: 'twitter',
      name: 'Twitter',
      keywords: 'go-twitter',
      section: sections.social,
      icon: <Twitter />,
      perform: () => window.open('https://twitter.com/opakholis', '_blank')
    },
    {
      id: 'polywork',
      name: 'Polywork',
      keywords: 'go-polywork',
      section: sections.social,
      icon: <Polywork />,
      perform: () => window.open('https://polywork.com/opakholis', '_blank')
    }
  ];

  return (
    <ThemeProvider attribute="class">
      <KBarProvider options={{ enableHistory: true }} actions={actions}>
        <CommandBar />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </KBarProvider>
    </ThemeProvider>
  );
};

export default App;
