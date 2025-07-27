// PersonSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface PersonSchemaProps {
  name: string
  jobTitle: string
  worksFor: {
    name: string
    type?: string
  }
  alumniOf?: {
    name: string
    type?: string
  }
  address?: {
    addressLocality: string
    addressCountry: string
  }
  knowsAbout?: string[]
}

export default function PersonSchema({ name, jobTitle, worksFor, alumniOf, address, knowsAbout }: PersonSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    worksFor: {
      '@type': worksFor.type || 'LegalService',
      name: worksFor.name
    },
    ...(alumniOf && {
      alumniOf: {
        '@type': alumniOf.type || 'CollegeOrUniversity',
        name: alumniOf.name
      }
    }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(knowsAbout && { knowsAbout })
  }
  return <StructuredData data={data} />
} 