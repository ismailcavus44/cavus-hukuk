'use client'

import React from 'react'
import StructuredData from './StructuredData'

interface ServiceSchemaProps {
  pageUrl: string
  serviceName: string
  serviceDescription: string
  services: Array<{
    name: string
    description: string
    url: string
    serviceType: string
  }>
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

export default function ServiceSchema({
  pageUrl,
  serviceName,
  serviceDescription,
  services,
  businessInfo
}: ServiceSchemaProps) {
  try {
    // Güvenli array kontrolü
    const servicesArray = Array.isArray(services) ? services : [];
    
    // Service schema
    const serviceSchema = {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: serviceName,
      description: serviceDescription,
      url: pageUrl,
      provider: {
        '@type': 'LocalBusiness',
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
      }
    };

    // ItemList schema
    const itemListSchema = {
      '@type': 'ItemList',
      '@id': `${pageUrl}#itemList`,
      name: `${serviceName} Hizmet Listesi`,
      description: `${serviceName} kapsamındaki hizmetlerin listesi`,
      numberOfItems: servicesArray.length,
      itemListElement: servicesArray.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: service.url,
          serviceType: service.serviceType,
          provider: {
            '@type': 'LocalBusiness',
            name: businessInfo.name
          }
        }
      }))
    };

    const serviceData = {
      '@context': 'https://schema.org',
      '@graph': [serviceSchema, itemListSchema]
    }

    // Debug için console.log (production'da kaldırılabilir)
    if (typeof window !== 'undefined') {
      console.log('ServiceSchema Data:', serviceData);
    }

    return <StructuredData data={serviceData} />
  } catch (error) {
    console.error('ServiceSchema Error:', error);
    console.error('Props:', { pageUrl, serviceName, services, businessInfo });
    
    // Fallback - basit schema
    const fallbackData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      url: pageUrl
    };
    
    return <StructuredData data={fallbackData} />
  }
} 