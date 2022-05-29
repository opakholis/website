import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-sm px-8">
      <Header />
      <main className="py-16 md:py-24">{children}</main>
      <Footer />
    </div>
  );
}
