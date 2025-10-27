'use client'

import React from 'react'
import StructuredData from './StructuredData'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
  url?: string
}

export default function BreadcrumbSchema({ items, url }: BreadcrumbSchemaProps) {
  const lastItem = items[items.length - 1]
  const breadcrumbUrl = url || lastItem?.url || ''
  
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${breadcrumbUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return <StructuredData data={breadcrumbData} />
} 