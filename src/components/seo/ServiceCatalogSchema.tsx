'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ServiceItem {
  '@type': string
  name: string
  description: string
  url?: string
  provider?: {
    '@type': string
    name: string
  }
  areaServed?: {
    '@type': string
    name: string
  }
  serviceType?: string
}

interface ServiceCatalogSchemaProps {
  name: string
  description: string
  url: string
  provider: {
    name: string
    url: string
    logo?: string
  }
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
  provider,
  services,
  areaServed
}: ServiceCatalogSchemaProps) {
  const serviceCatalogData = {
    '@context': 'https://schema.org',
    '@type': 'ServiceCatalog',
    name,
    description,
    url,
    provider: {
      '@type': 'LegalService',
      name: provider.name,
      url: provider.url,
      ...(provider.logo && { logo: provider.logo })
    },
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
          ...(service.url && { url: service.url }),
          ...(service.provider && { provider: service.provider }),
          ...(service.areaServed && { areaServed: service.areaServed }),
          ...(service.serviceType && { serviceType: service.serviceType })
        }
      }))
    }
  }

  return <StructuredData data={serviceCatalogData} />
} 