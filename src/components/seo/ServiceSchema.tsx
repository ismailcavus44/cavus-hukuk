'use client'

import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours?: string;
  priceRange?: string;
  sameAs?: string[];
  areaServed?: {
    '@type': string;
    name: string;
  };
  serviceType?: string;
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
      };
    }>;
  };
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  logo,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  sameAs,
  areaServed,
  serviceType,
  hasOfferCatalog
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    ...(logo && { "logo": logo }),
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": {
        "@type": "Country",
        "name": address.addressCountry
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    ...(openingHours && { "openingHours": openingHours }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(sameAs && { "sameAs": sameAs }),
    ...(areaServed && { "areaServed": areaServed }),
    ...(serviceType && { "serviceType": serviceType }),
    ...(hasOfferCatalog && { "hasOfferCatalog": hasOfferCatalog })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema; 