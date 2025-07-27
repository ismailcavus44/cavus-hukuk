import React from 'react';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-2 md:pt-0">
      {children}
    </div>
  );
} 