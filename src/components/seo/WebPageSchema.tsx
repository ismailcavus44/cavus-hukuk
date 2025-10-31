'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  isPartOf?: string
  about?: string
  breadcrumbId?: string
  mentions?: string
}

export default function WebPageSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  isPartOf,
  about,
  breadcrumbId,
  mentions
}: WebPageSchemaProps) {
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description,
    url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(isPartOf && {
      isPartOf: {
        '@id': isPartOf
      }
    }),
    ...(about && {
      about: {
        '@id': about
      }
    }),
    ...(breadcrumbId && {
      breadcrumb: {
        '@id': breadcrumbId
      }
    }),
    ...(mentions && {
      mentions: {
        '@id': mentions
      }
    })
  }

  return <StructuredData data={webPageData} />
} 