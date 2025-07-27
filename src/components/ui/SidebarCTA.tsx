"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

interface SidebarCTAProps {
  ctaTitle: string;
  ctaDescription: string;
}

const SidebarCTA: React.FC<SidebarCTAProps> = ({ 
  ctaTitle, 
  ctaDescription 
}) => {
  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32">
        {/* İletişim CTA */}
        <div className="bg-red-600 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">{ctaTitle}</h3>
          <p className="text-sm mb-4">
            {ctaDescription}
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+905053989981" className="hover:underline">
                +90 505 398 9981
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:info@ismailcavus.av.tr" className="hover:underline">
                info@ismailcavus.av.tr
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Çankaya/Ankara</span>
            </div>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center w-full mt-4 px-4 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Randevu Al
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarCTA; 