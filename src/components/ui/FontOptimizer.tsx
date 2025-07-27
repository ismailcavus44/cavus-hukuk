'use client';

import React from 'react';

interface FontOptimizerProps {
  children: React.ReactNode;
}

const FontOptimizer = React.memo(({ children }: FontOptimizerProps) => {
  // Font loading optimizasyonu
  React.useEffect(() => {
    // Font loading API kullanımı
    if ('fonts' in document) {
      // Font yükleme durumunu izle
      document.fonts.ready.then(() => {
        // Fontlar yüklendiğinde yapılacak işlemler
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);

  return <>{children}</>;
});

FontOptimizer.displayName = 'FontOptimizer';

export default FontOptimizer; 