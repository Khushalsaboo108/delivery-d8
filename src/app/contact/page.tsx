import type { Metadata } from 'next'
import { ContactPage } from '../../components/page-templates'

const title = 'Contact Shree Balaji Enterprises | Jodhpur'
const description = 'Contact Shree Balaji Enterprises for courier, cargo, B2B courier and goods transportation enquiries in Jodhpur.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title,
    description,
    url: '/contact',
    images: [{ url: '/parcel-image.jpeg', alt: 'Preparing a parcel for courier dispatch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/parcel-image.jpeg'],
  },
}

export default ContactPage
