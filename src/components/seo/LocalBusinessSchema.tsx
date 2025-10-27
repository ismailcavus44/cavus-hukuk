'use client'

import React from 'react';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
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
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  sameAs,
  areaServed,
  serviceType
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#local`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "hasMap": `https://maps.app.goo.gl/Wf66FPCrdRhPqjXQ6`,
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
    ...(serviceType && { "serviceType": serviceType })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema; 