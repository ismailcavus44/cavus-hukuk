// BlogSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface BlogSchemaProps {
  url: string
  name: string
  description: string
  publisher: {
    name: string
    url: string
  }
}

export default function BlogSchema({ url, name, description, publisher }: BlogSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name,
    description,
    publisher: {
      '@type': 'LegalService',
      name: publisher.name,
      url: publisher.url
    }
  }
  return <StructuredData data={data} />
} 