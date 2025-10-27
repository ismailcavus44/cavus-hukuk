// BlogSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface BlogSchemaProps {
  url: string
  name: string
  description: string
  publisherId: string
}

export default function BlogSchema({ url, name, description, publisherId }: BlogSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#blog`,
    url,
    name,
    description,
    publisher: {
      '@id': publisherId
    }
  }
  return <StructuredData data={data} />
} 