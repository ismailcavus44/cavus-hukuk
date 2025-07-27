'use client';

import { useEffect } from 'react';

const FontOptimizer = () => {
  useEffect(() => {
    // Font loading optimizasyonu
    if ('fonts' in document) {
      // Font loading API kullan
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
      });
    } else {
      // Fallback: 3 saniye sonra fontların yüklendiğini varsay
      setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded');
        document.documentElement.classList.remove('fonts-loading');
      }, 3000);
    }
  }, []);

  return null;
};

export default FontOptimizer; 