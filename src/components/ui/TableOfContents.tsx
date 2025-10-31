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
  defaultOpen?: boolean;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  tableOfContents,
  defaultOpen = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Numaralandırma hesaplama
  const getNumberedTitle = (item: TableOfContentsItem, index: number) => {
    let h2Count = 0;
    let h3Count = 0;
    
    for (let i = 0; i <= index; i++) {
      if (tableOfContents[i].level === 2) {
        h2Count++;
        h3Count = 0; // H2 bulunduğunda h3 sayacını sıfırla
      } else if (tableOfContents[i].level === 3) {
        h3Count++;
      }
    }
    
    if (item.level === 2) {
      return `${h2Count}. ${item.title}`;
    } else if (item.level === 3) {
      return `${h2Count}.${h3Count} ${item.title}`;
    }
    return item.title;
  };

  return (
    <div className="mb-8">
      <div className={`bg-gray-50 rounded-lg p-6 lg:p-3 ${className || 'lg:w-1/2'}`}>
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-semibold text-gray-900">İçindekiler</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {isOpen && (
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-[15px] text-gray-700 hover:text-red-600 transition-colors ${
                    item.level === 3 ? 'ml-4' : ''
                  }`}
                >
                  {getNumberedTitle(item, index)}
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