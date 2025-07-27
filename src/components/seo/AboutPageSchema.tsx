// AboutPageSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface AboutPageSchemaProps {
  url: string
  name: string
  description: string
}

export default function AboutPageSchema({ url, name, description }: AboutPageSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#about`,
    url,
    name,
    description
  }
  return <StructuredData data={data} />
} 