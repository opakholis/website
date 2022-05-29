import React from 'react';

export function Pencil({
  className = 'h-4 w-4',
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="2" x2="22" y2="6"></line>
      <path d="M7.5 20.5L19 9l-4-4L3.5 16.5 2 22z"></path>
    </svg>
  );
}
