'use client'

import React from 'react'

interface StructuredDataProps {
  data: any
  type?: 'application/ld+json' | 'application/json'
}

export default function StructuredData({ data, type = 'application/ld+json' }: StructuredDataProps) {
  return (
    <script
      type={type}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  )
} 