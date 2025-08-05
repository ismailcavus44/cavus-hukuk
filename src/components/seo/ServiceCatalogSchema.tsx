'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ServiceItem {
  '@type': 'Service'
  name: string
  description: string
  url: string
  serviceType: string
}

interface ServiceCatalogSchemaProps {
  name: string
  description: string
  url: string
  services: ServiceItem[]
  areaServed?: {
    '@type': string
    name: string
  }
}

export default function ServiceCatalogSchema({
  name,
  description,
  url,
  services,
  areaServed
}: ServiceCatalogSchemaProps) {
  const serviceCatalogData = {
    '@context': 'https://schema.org',
    '@type': 'ServiceCatalog',
    name,
    description,
    url,
    ...(areaServed && { areaServed }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Hizmet Kataloğu`,
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': service['@type'],
          name: service.name,
          description: service.description,
          url: service.url,
          serviceType: service.serviceType
        }
      }))
    }
  }

  return <StructuredData data={serviceCatalogData} />
} 