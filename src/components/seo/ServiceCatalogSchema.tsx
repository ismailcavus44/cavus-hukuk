'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ServiceItem {
  '@type': 'Service'
  name: string
  description: string
  url?: string
  serviceType: string
  alternateName?: string
  providerId: string
}

interface ServiceCatalogSchemaProps {
  name: string
  description: string
  url: string
  services: ServiceItem[]
}

export default function ServiceCatalogSchema({
  name,
  description,
  url,
  services
}: ServiceCatalogSchemaProps) {
  const serviceCatalogData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    url,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        ...(service.alternateName && { alternateName: service.alternateName }),
        ...(service.url && { url: service.url }),
        provider: {
          '@id': service.providerId
        },
        areaServed: {
          '@type': 'Country',
          name: 'Türkiye'
        }
      }
    }))
  }

  return <StructuredData data={serviceCatalogData} />
} 