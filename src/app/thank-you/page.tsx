import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Shree Balaji Enterprises',
  description: 'Thank you for contacting Shree Balaji Enterprises.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: true },
}

export default function Page(){return <main className="page-section"><div className="container narrow"><p className="eyebrow">Enquiry received</p><h1>Thank you for reaching out.</h1><p className="lead">A team member will review your message and get back to you soon.</p><Link href="/" className="button">Back to home</Link></div></main>}
