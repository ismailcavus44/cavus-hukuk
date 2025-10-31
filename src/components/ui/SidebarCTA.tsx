"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, ChevronRight } from 'lucide-react';

interface SidebarCTAProps {
  ctaTitle: string;
  ctaDescription: string;
}

const SidebarCTA: React.FC<SidebarCTAProps> = ({ 
  ctaTitle, 
  ctaDescription 
}) => {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-32">
        {/* İletişim CTA */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{ctaTitle}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {ctaDescription}
          </p>
          
          {/* İletişim Bilgileri */}
          <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
            <a 
              href="tel:+905053989981" 
              className="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Phone size={16} className="mr-2 text-red-600" />
              <span>+90 505 398 99 81</span>
            </a>
            <a 
              href="mailto:av.ismailcavuss@gmail.com" 
              className="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Mail size={16} className="mr-2 text-red-600" />
              <span>av.ismailcavuss@gmail.com</span>
            </a>
            <div className="flex items-start text-sm text-gray-700">
              <Clock size={16} className="mr-2 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium">Çalışma Saatleri</p>
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>
            </div>
          </div>

          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            İletişime Geç
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarCTA; 