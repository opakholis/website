import cn from 'classnames';

import { Contact } from './Contacts';
import { Twitter, Github, Polywork, Email } from '~/components/icons';

export function Introduction() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="mb-8 font-medium text-zinc-800 dark:text-white">
          Opa Kholis Majid
        </h1>
        <div className="max-w-[54ch] space-y-5">
          <p className="leading-loose">
            Seorang yang mengaku dirinya sebagai{' '}
            <i
              className={cn(
                'cursor-pointer rounded-sm font-medium underline decoration-sky-500 decoration-2 underline-offset-2 transition duration-200',
                'text-zinc-800 hover:text-sky-500 dark:text-white dark:hover:text-sky-400',
                'hover:decoration-sky-500/30 dark:decoration-sky-400 dark:hover:decoration-sky-400/40'
              )}
            >
              Front-End Developer
            </i>{' '}
            yang menaruh ketertarikan pada{' '}
            <i
              className={cn(
                'cursor-pointer rounded-sm font-medium underline decoration-fuchsia-500 decoration-2 underline-offset-2 transition duration-200',
                'text-zinc-800 hover:text-fuchsia-500 dark:text-white dark:hover:text-fuchsia-400',
                'hover:decoration-fuchsia-500/30 dark:decoration-fuchsia-400 dark:hover:decoration-fuchsia-400/40'
              )}
            >
              React Ekosistem
            </i>
            .
          </p>
          <p className="leading-loose">
            Dengan rutinitas yang membosankan—Pagi hingga sore menulis kode dan
            menjelang malam membuka modul pembelajaran untuk memenuhi kewajiban
            sebagai seorang mahasiswa.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-5 font-medium text-zinc-800 dark:text-white">
          Connect
        </h2>
        <div className="flex flex-wrap gap-4 text-center">
          <Contact
            href="https://twitter.com/opakholis"
            title="Twitter"
            className={cn(
              `bg-sky-500 dark:bg-sky-400`,
              `ring-sky-500 dark:ring-sky-400 `,
              `focus:ring-sky-500 dark:focus:ring-sky-400`
            )}
            icon={<Twitter />}
          />
          <Contact
            href="https://github.com/opakholis"
            title="Github"
            className={cn(
              `bg-fuchsia-500 dark:bg-fuchsia-400`,
              `ring-fuchsia-500 dark:ring-fuchsia-400 `,
              `focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400`
            )}
            icon={<Github />}
          />
          <Contact
            href="https://polywork.com/opakholis"
            title="Polywork"
            className={cn(
              `bg-indigo-500 dark:bg-indigo-400`,
              `ring-indigo-500 dark:ring-indigo-400 `,
              `focus:ring-indigo-500 dark:focus:ring-indigo-400`
            )}
            icon={<Polywork />}
          />
          <Contact
            href="mailto:hi@opakholis.space"
            title="Email"
            className={cn(
              `bg-lime-500 dark:bg-lime-400`,
              `ring-lime-500 dark:ring-lime-400 `,
              `focus:ring-lime-500 dark:focus:ring-lime-400`
            )}
            icon={<Email />}
          />
        </div>
      </section>
    </div>
  );
}
