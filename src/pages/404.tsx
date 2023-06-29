import Link from 'next/link';

import { PageSeo } from '~/components/Seo';

const meta = {
  title: 'Whoopsies!',
  description: 'This page is gone but I am still here.'
};

export default function Error() {
  return (
    <>
      <PageSeo
        title={meta.title}
        titleTemplate="%s — 404"
        description={meta.description}
      />

      <main className="mx-auto my-1 h-screen w-full max-w-screen-sm px-8 py-64">
        <span className="mb-4">{meta.title}</span>
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-white ">
          {meta.description}
        </h1>
        <p className="leading-lose my-4">
          Kamu sedang mambaca ini dan mungkin saja kamu kebingungan. Ya, ini
          adalah halaman 404 dan ya, halaman yang kamu cari sekarang sudah tidak
          lagi ada :(
        </p>
        <p className="leading-lose mb-4">
          Thanks for stopping on my site by the way. Have a noice day.
        </p>
        <Link
          href="/"
          className="rounded-md bg-zinc-300/80 p-2 px-4 text-sm text-zinc-800 transition duration-300 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700/50 dark:focus:ring-zinc-500 dark:focus:ring-offset-zinc-900"
        >
          Kembali
        </Link>
      </main>
    </>
  );
}
