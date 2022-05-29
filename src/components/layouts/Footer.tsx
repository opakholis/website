import NowPlaying from '~/components/NowPlaying';

export function Footer() {
  const now = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between pt-14 pb-6 text-sm lg:pb-8 lg:pt-16">
      <section className="flex-grow">
        <NowPlaying />
      </section>
      <section>Karawang · {now}</section>
    </footer>
  );
}
