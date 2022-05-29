import React from 'react';

export function Email({
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
      {...props}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>
    </svg>
  );
}
