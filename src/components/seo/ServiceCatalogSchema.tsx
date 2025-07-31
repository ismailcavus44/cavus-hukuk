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
  provider: {
    name: string
    url: string
    logo: string
    address: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
    telephone: string
    email: string
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
      logo: provider.logo,
      address: {
        '@type': 'PostalAddress',
        streetAddress: provider.address.streetAddress,
        addressLocality: provider.address.addressLocality,
        addressRegion: provider.address.addressRegion,
        postalCode: provider.address.postalCode,
        addressCountry: {
          '@type': 'Country',
          name: provider.address.addressCountry
        }
      },
      telephone: provider.telephone,
      email: provider.email
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
          url: service.url,
          serviceType: service.serviceType
        }
      }))
    }
  }

  return <StructuredData data={serviceCatalogData} />
} 