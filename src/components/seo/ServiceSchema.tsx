'use client'

import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  providerId: string;
  alternateName?: string;
  areaServed?: string | { "@type": string; name: string };
  audience?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  serviceType,
  providerId,
  alternateName,
  areaServed,
  audience
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    ...(alternateName && { "alternateName": alternateName }),
    "provider": {
      "@id": providerId
    },
    ...(areaServed
      ? {
          "areaServed": typeof areaServed === 'string'
            ? areaServed
            : areaServed
        }
      : {
          "areaServed": {
            "@type": "City",
            "name": "Ankara"
          }
        }),
    ...(audience && { "audience": audience })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema; 