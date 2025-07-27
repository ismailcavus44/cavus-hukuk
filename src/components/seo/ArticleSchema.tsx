'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ArticleSchemaProps {
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
  articleSection?: string
  keywords?: string[]
  wordCount?: number
  readingTime?: number
}

export default function ArticleSchema({
  title,
  description,
  url,
  image,
  author,
  publisher,
  datePublished,
  dateModified,
  articleSection,
  keywords,
  wordCount,
  readingTime
}: ArticleSchemaProps) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
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
    ...(articleSection && { articleSection }),
    ...(keywords && { keywords: keywords.join(', ') }),
    ...(wordCount && { wordCount }),
    ...(readingTime && { timeRequired: `PT${readingTime}M` })
  }

  return <StructuredData data={articleData} />
} 