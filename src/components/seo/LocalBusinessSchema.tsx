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
  hasMap: string;
  sameAs?: string[];
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  hasMap,
  sameAs
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${url}#local`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "hasMap": hasMap,
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
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "parentOrganization": {
      "@id": `${url}#organization`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": telephone,
      "contactType": "customer service"
    },
    ...(sameAs && { "sameAs": sameAs })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema; 