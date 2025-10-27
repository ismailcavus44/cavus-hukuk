'use client'

import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  providerId: string;
  alternateName?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  serviceType,
  providerId,
  alternateName
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
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema; 