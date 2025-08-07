'use client'

import React from 'react';

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo: string;
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
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
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
  sameAs
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
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
    ...(sameAs && { "sameAs": sameAs })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema; 