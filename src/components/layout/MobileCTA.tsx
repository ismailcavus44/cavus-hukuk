"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileCTA = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+905053989981';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Merhaba, hukuki danışmanlık hakkında bilgi almak istiyorum.');
    window.open(`https://wa.me/905053989981?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex space-x-3">
        {/* Telefon Butonu */}
        <button
          onClick={handlePhoneCall}
          className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Phone size={20} />
          <span className="font-medium">Ara</span>
        </button>

        {/* WhatsApp Butonu */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <MessageCircle size={20} />
          <span className="font-medium">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCTA; 