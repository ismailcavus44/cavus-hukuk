'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface ServiceItem {
  name: string
  url: string
}

const defaultServices: ServiceItem[] = [
  { name: 'Ceza Hukuku', url: '/ankara-ceza-avukati' },
  { name: 'Aile Hukuku', url: '/ankara-bosanma-avukati' },
  { name: 'İş Hukuku', url: '/ankara-is-avukati' },
  { name: 'Miras Hukuku', url: '/ankara-miras-avukati' },
  { name: 'İcra ve İflas Hukuku', url: '/ankara-icra-avukati' },
  { name: 'İdare Hukuku', url: '/ankara-idare-avukati' },
  { name: 'Trafik Kazası Hukuku', url: '/ankara-trafik-kazasi-avukati' },
  { name: 'Vatandaşlık Hukuku', url: '#' }
]

interface ServicesSidebarProps {
  services?: ServiceItem[]
  className?: string
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ 
  services = defaultServices,
  className = '' 
}) => {
  const pathname = usePathname()

  return (
    <div className={`hidden lg:block bg-white border border-gray-200 rounded-lg p-6 mb-6 w-[375px] ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hizmetlerimiz</h3>
      <ul className="space-y-2">
        {services.map((service) => {
          const isActive = pathname === service.url
          return (
            <li key={service.url}>
              <Link
                href={service.url}
                className={`block py-2 px-3 rounded transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
              >
                {service.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServicesSidebar

