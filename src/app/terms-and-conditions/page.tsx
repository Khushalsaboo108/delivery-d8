import type { Metadata } from 'next'
import { InfoPage } from '../../components/page-templates'

const title = 'Terms and Conditions | Shree Balaji Enterprises'
const description = 'Terms and conditions for using the Shree Balaji Enterprises website.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms-and-conditions' },
  openGraph: {
    title,
    description,
    url: '/terms-and-conditions',
    images: [{ url: '/about-us-hero.jpeg', alt: 'Shree Balaji Enterprises team outside their Jodhpur logistics office' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/about-us-hero.jpeg'],
  },
}

export default function Page() { return <InfoPage eyebrow="Legal" title="Terms and conditions" text="A simple guide to using this website and making an enquiry."><p>Information on this website is provided for general guidance and enquiry purposes. Service availability, pricing, routes and timelines are confirmed only after discussing the specific requirement with our team.</p><p>By submitting an enquiry, you confirm that the information shared is accurate to the best of your knowledge.</p></InfoPage> }
