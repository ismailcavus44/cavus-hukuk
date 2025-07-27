// ContactPageSchema.tsx
'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ContactPageSchemaProps {
  url: string
  name: string
  description: string
}

export default function ContactPageSchema({ url, name, description }: ContactPageSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#contact`,
    url,
    name,
    description
  }
  return <StructuredData data={data} />
} 