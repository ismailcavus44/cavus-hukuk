'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = React.memo(({ items, className = "" }: BreadcrumbProps) => {
  return (
    <nav className={`flex items-center flex-wrap gap-2 text-sm mb-6 text-gray-600 ${className}`} aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center text-gray-600 hover:text-red-600 transition-colors whitespace-nowrap"
        aria-label="Ana Sayfa"
      >
        <Home size={16} className="mr-1" />
        Ana Sayfa
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="text-gray-500 flex-shrink-0" />
          {item.href ? (
            <Link 
              href={item.href}
              className="text-gray-600 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium whitespace-nowrap">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb; 