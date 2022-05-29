import React from 'react';

export function Polywork({
  className = 'h-4 w-4',
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg className={className} fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth=".5"
        d="M1 12.156V3.844A2.838 2.838 0 0 1 3.844 1h8.312A2.838 2.838 0 0 1 15 3.844v4.025a2.838 2.838 0 0 1-2.844 2.844h-1.619v1.443A2.838 2.838 0 0 1 7.694 15h-3.85A2.838 2.838 0 0 1 1 12.156ZM5.375 5.42H1.744V3.8a2.1 2.1 0 0 1 2.1-2.1h1.531v3.719Zm6.781 4.593h-1.531V6.25h3.631v1.662a2.1 2.1 0 0 1-2.1 2.1ZM7.694 14.3H6.162v-3.456h3.632V12.2a2.1 2.1 0 0 1-2.1 2.1Zm-1.532-4.288h3.632V6.25H6.162v3.762Zm4.463-4.593h3.631V3.844a2.1 2.1 0 0 0-2.1-2.1h-1.531v3.675Zm-.831 0H6.162V1.7h3.632v3.719ZM1.7 10.8v1.356a2.1 2.1 0 0 0 2.1 2.1h1.575V10.8H1.7Zm3.675-.788H1.7V6.25h3.675v3.762Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
