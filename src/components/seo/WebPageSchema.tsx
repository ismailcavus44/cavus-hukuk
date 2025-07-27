'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  image?: string
  author?: {
    name: string
    url?: string
  }
  publisher?: {
    name: string
    logo?: string
  }
  datePublished?: string
  dateModified?: string
  breadcrumb?: Array<{
    name: string
    url: string
  }>
  mainEntity?: any
  isPartOf?: {
    name: string
    url: string
  }
}

export default function WebPageSchema({
  title,
  description,
  url,
  image,
  author,
  publisher,
  datePublished,
  dateModified,
  breadcrumb,
  mainEntity,
  isPartOf
}: WebPageSchemaProps) {
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(image && { image }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author.name,
        ...(author.url && { url: author.url })
      }
    }),
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher.name,
        ...(publisher.logo && { logo: publisher.logo })
      }
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    }),
    ...(mainEntity && { mainEntity }),
    ...(isPartOf && {
      isPartOf: {
        '@type': 'WebSite',
        name: isPartOf.name,
        url: isPartOf.url
      }
    })
  }

  return <StructuredData data={webPageData} />
} 