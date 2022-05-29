import React from 'react';
import cn from 'classnames';

type ContactProps = {
  className?: React.ReactNode;
  href: string;
  title: string;
  icon: React.ReactElement<SVGElement>;
};

export function Contact({ href, icon, className, title }: ContactProps) {
  return (
    <a
      className={cn(
        'flex items-center justify-center gap-2 transition duration-300',
        `rounded-lg p-2.5 px-3 text-white dark:text-zinc-900 md:px-4`,
        `ring-offset-2 hover:ring-1 dark:ring-offset-zinc-900`,
        `focus:outline-none focus:ring-1 dark:focus:ring-offset-zinc-900`,
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon}
      <span className="hidden text-sm sm:inline">{title}</span>
    </a>
  );
}
