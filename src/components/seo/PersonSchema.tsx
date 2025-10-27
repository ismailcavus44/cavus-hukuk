// PersonSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface PersonSchemaProps {
  name: string
  jobTitle: string
  worksFor?: {
    name: string
    type?: string
  } | string
  alumniOf?: {
    name: string
    type?: string
  }
  address?: {
    addressLocality: string
    addressCountry: string
  }
  knowsAbout?: string[]
  id?: string
  image?: string
  sameAs?: string[]
}

export default function PersonSchema({ name, jobTitle, worksFor, alumniOf, address, knowsAbout, id, image, sameAs }: PersonSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    ...(id && { '@id': id }),
    name,
    jobTitle,
    ...(image && { image }),
    ...(worksFor && {
      worksFor: typeof worksFor === 'string' 
        ? { '@id': worksFor }
        : {
            '@type': worksFor.type || 'Organization',
            name: worksFor.name
          }
    }),
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
    ...(knowsAbout && { knowsAbout }),
    ...(sameAs && { sameAs })
  }
  return <StructuredData data={data} />
} 