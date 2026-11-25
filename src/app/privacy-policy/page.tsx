import type { Metadata } from 'next'
import { InfoPage } from '../../components/page-templates'

const title = 'Privacy Policy | Shree Balaji Enterprises'
const description = 'Privacy policy for Shree Balaji Enterprises.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title,
    description,
    url: '/privacy-policy',
    images: [{ url: '/about-us-hero.jpeg', alt: 'Shree Balaji Enterprises team outside their Jodhpur logistics office' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/about-us-hero.jpeg'],
  },
}

export default function Page() { return <InfoPage eyebrow="Legal" title="Privacy policy" text="How we handle information shared through this website."><p>This website is intended to help customers contact Shree Balaji Enterprises. Information you provide through an enquiry form may be used to respond to your request and coordinate follow-up.</p><p>We do not ask you to share sensitive personal information through this website. For questions about your information, please contact our team directly.</p></InfoPage> }
