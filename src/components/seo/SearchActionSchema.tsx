// SearchActionSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface SearchActionSchemaProps {
  url: string
  name: string
  description: string
  target: string
}

export default function SearchActionSchema({ url, name, description, target }: SearchActionSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: url,
    name: name,
    description: description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
  return <StructuredData data={data} />
} 