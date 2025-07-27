"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  tableOfContents: TableOfContentsItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  tableOfContents 
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-gray-50 rounded-lg p-6 lg:p-3 lg:w-1/2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">İçindekiler</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:flex hidden items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {isOpen && (
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-red-600 transition-colors"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TableOfContents; 