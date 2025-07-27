'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

const OptimizedImage = React.memo(({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center'
}: OptimizedImageProps) => {
  // External URL kontrolü
  const isExternalUrl = src.startsWith('http');
  
  // Local image için optimizasyon
  if (!isExternalUrl) {
    return (
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        className={className}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        fill={fill}
        style={fill ? { objectFit, objectPosition } : undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  // External URL için fallback img tag
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectFit, objectPosition }}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 