"use client";

import React from 'react';

export interface FAQItemData {
  id?: string;
  title: string;
  content: string;
}

interface FAQCardsProps {
  items: FAQItemData[];
}

const FAQCards: React.FC<FAQCardsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-6 space-y-4 max-w-[660px] mx-auto" itemScope itemType="https://schema.org/FAQPage">
      {items.map(({ id, title, content }, idx) => (
        <article
          key={id || `faq-${idx}`}
          id={id}
          className="border border-gray-200 rounded-none p-6 bg-white scroll-mt-40"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3" itemProp="name">
            {title}
          </h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none" itemProp="text">
              {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FAQCards;


