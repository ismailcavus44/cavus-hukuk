'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface OrganizationSchemaProps {
  name: string
  description: string
  url: string
  logo?: string
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
  sameAs?: string[]
  openingHours?: string
  priceRange?: string
}

export default function OrganizationSchema({
  name,
  description,
  url,
  logo,
  telephone,
  email,
  address,
  geo,
  sameAs,
  openingHours,
  priceRange
}: OrganizationSchemaProps) {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${url}#organization`,
    name,
    description,
    url,
    ...(logo && { logo }),
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
    ...(sameAs && { sameAs }),
    ...(openingHours && { openingHours }),
    ...(priceRange && { priceRange })
  }

  return <StructuredData data={organizationData} />
} 