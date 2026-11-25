import type { Metadata } from 'next'
import { ServicesPage } from '../../components/page-templates'

const title = 'Courier & Logistics Services in Jodhpur | Shree Balaji Enterprises'
const description = 'Explore courier, B2B courier, cargo and goods transportation services from Shree Balaji Enterprises in Jodhpur.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title,
    description,
    url: '/services',
    images: [{ url: '/shipment.jpeg', alt: 'Packages moving through a warehouse dispatch line' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/shipment.jpeg'],
  },
}

export default ServicesPage
