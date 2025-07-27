'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: string
    longitude: string
  }
  openingHours?: string
  priceRange?: string
  sameAs?: string[]
  areaServed?: {
    '@type': string
    name: string
  }
  serviceType?: string
  hasOfferCatalog?: {
    '@type': string
    name: string
    itemListElement: Array<{
      '@type': string
      itemOffered: {
        '@type': string
        name: string
      }
    }>
  }
}

export default function LocalBusinessSchema({
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
  serviceType,
  hasOfferCatalog
}: LocalBusinessSchemaProps) {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localBusiness`,
    name,
    description,
    url,
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...geo
      }
    }),
    ...(openingHours && { openingHours }),
    ...(priceRange && { priceRange }),
    ...(sameAs && { sameAs }),
    ...(areaServed && { areaServed }),
    ...(serviceType && { serviceType }),
    ...(hasOfferCatalog && { hasOfferCatalog })
  }

  return <StructuredData data={localBusinessData} />
} 