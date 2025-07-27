'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface LegalServiceSchemaProps {
  pageUrl: string
  serviceName: string
  serviceDescription: string
  serviceType: string
  services: Array<{
    name: string
    description?: string
  }>
  areaServed?: {
    '@type': string
    name: string
  }
  businessInfo: {
    name: string
    description: string
    telephone?: string
    email?: string
    address?: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
    geo?: {
      latitude: string
      longitude: string
    }
    openingHours?: string
    priceRange?: string
    sameAs?: string[]
  }
}

export default function LegalServiceSchema({
  pageUrl,
  serviceName,
  serviceDescription,
  serviceType,
  services,
  areaServed,
  businessInfo
}: LegalServiceSchemaProps) {
  try {
    // Güvenli array kontrolü
    const servicesArray = Array.isArray(services) ? services : [];
    
    // LegalService schema
    const legalServiceSchema = {
      '@type': 'LegalService',
      '@id': `${pageUrl}#legalService`,
      name: serviceName,
      description: serviceDescription,
      url: pageUrl,
      ...(areaServed && { areaServed: areaServed }),
      serviceType,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${serviceType} Hizmetleri`,
        itemListElement: servicesArray.map(service => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            ...(service.description && { description: service.description })
          }
        }))
      }
    };

    // LocalBusiness schema
    const localBusinessSchema = {
      '@type': 'LocalBusiness',
      '@id': `${pageUrl}#localBusiness`,
      name: businessInfo.name,
      description: businessInfo.description,
      url: 'https://ismailcavus.av.tr',
      ...(businessInfo.telephone && { telephone: businessInfo.telephone }),
      ...(businessInfo.email && { email: businessInfo.email }),
      ...(businessInfo.address && {
        address: {
          '@type': 'PostalAddress',
          ...businessInfo.address
        }
      }),
      ...(businessInfo.geo && {
        geo: {
          '@type': 'GeoCoordinates',
          ...businessInfo.geo
        }
      }),
      ...(businessInfo.openingHours && { openingHours: businessInfo.openingHours }),
      ...(businessInfo.priceRange && { priceRange: businessInfo.priceRange }),
      ...(businessInfo.sameAs && { sameAs: businessInfo.sameAs })
    };

    const legalServiceData = {
      '@context': 'https://schema.org',
      '@graph': [legalServiceSchema, localBusinessSchema]
    }

    // Debug için console.log (production'da kaldırılabilir)
    if (typeof window !== 'undefined') {
      console.log('LegalServiceSchema Data:', legalServiceData);
    }

    return <StructuredData data={legalServiceData} />
  } catch (error) {
    console.error('LegalServiceSchema Error:', error);
    console.error('Props:', { pageUrl, serviceName, serviceType, services, businessInfo });
    
    // Fallback - basit schema
    const fallbackData = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: serviceName,
      description: serviceDescription,
      url: pageUrl
    };
    
    return <StructuredData data={fallbackData} />
  }
} 