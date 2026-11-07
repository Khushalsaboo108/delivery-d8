'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Clock3, Mail, MapPin, Menu, Phone, ShieldCheck, Truck, X } from 'lucide-react'

export const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-07%20at%2014.33.28%20%286%29-inI9RYCYAWYVDZv4dsXfHKhgCOSTX4.jpeg',
  cargo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-07%20at%2014.33.28%20%283%29-BIdOoAk4R45zGnwTUhvgfdi8J3srgU.jpeg',
  parcel: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-07%20at%2014.33.28%20%282%29-9qu13IT6BHDctCWwhGHqr0g3IxfF34.jpeg',
  warehouse: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-07%20at%2014.33.28%20%281%29-hJi1JgHb0vaQIDY1AcsOtkvyPUIs0F.jpeg',
  road: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14ik-Yk5Mxr0-C31bNVZ7RZHO-SIldoJIrUO4eDKcyqVqRi6J67MeLG_S7g52MwfnHuOc6eY_UYyDRVaV-aC1LdQ7x85msDHAQ998ImTeKHC3UN9xKdKLgabLxaktmpRSW41rHTMH_gba1r41WGYn44zZmhs___nn1D_3BZdB1Q-8rX1prsWcOpmYskxMeOkwBWBhEmnWG.jpeg',
}

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}>{children}</div>
}

const nav = [
  ['About Us', '/about'], ['Services', '/services'], ['B2B Courier', '/b2b-courier'], ['Cargo', '/cargo-services'], ['Transport', '/transport-services'], ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">SB</span><span>Shree Balaji <b>Enterprises</b></span></Link>
    <nav className="desktop-nav">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link className="button button-small desktop-cta" href="/contact">Get a quote <ArrowRight size={15}/></Link>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div>{open && <nav className="mobile-nav">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button" href="/contact" onClick={() => setOpen(false)}>Get a quote <ArrowRight size={15}/></Link></nav>}</header>
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">SB</span><span>Shree Balaji <b>Enterprises</b></span></Link><p className="footer-copy">Reliable domestic and international courier, cargo and transportation solutions from Jodhpur to destinations worldwide.</p></div><div><p className="footer-label">Explore</p><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/contact">Request a quote</Link></div><div><p className="footer-label">Contact</p><span><MapPin size={15}/> Jodhpur, Rajasthan</span><a href="mailto:hello@shreebalajienterprises.in"><Mail size={15}/> Email us</a><a href="tel:+919999999999"><Phone size={15}/> Call our team</a></div></div><div className="container footer-bottom"><span>© 2026 Shree Balaji Enterprises</span><span><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link></span></div></footer> }

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) { return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="lead">{text}</p>}</div> }

const services = [
  ['01', 'Courier services', 'Dependable parcel movement for personal and business requirements.', '/services', images.parcel],
  ['02', 'B2B courier', 'Practical shipment coordination built around the way businesses operate.', '/b2b-courier', images.warehouse],
  ['03', 'Cargo services', 'Careful handling for larger, heavier and time-sensitive cargo needs.', '/cargo-services', images.cargo],
  ['04', 'Goods transportation', 'Straightforward movement of goods with clear communication at every step.', '/transport-services', images.road],
]
export function ServicesGrid() { return <div className="services-grid">{services.map(([number, title, desc, href, image]) => <Link href={href} className="service-card reveal" key={title}><div className="service-image"><Image src={image} alt={`${title} logistics service`} fill sizes="(max-width: 800px) 100vw, 25vw"/></div><div className="service-content"><span className="service-number">{number}</span><h3>{title}</h3><p>{desc}</p><span className="text-link">Explore service <ArrowRight size={15}/></span></div></Link>)}</div> }

export function Process() { const steps = [['01', 'Share your requirement'], ['02', 'Get a clear quote'], ['03', 'Shipment coordination'], ['04', 'Delivery & completion']]; return <div className="process-grid">{steps.map(([n, t]) => <div className="process-step reveal" key={n}><span>{n}</span><div><div className="process-line"/><h3>{t}</h3></div></div>)}</div> }

export function FAQ() { const questions = ['Which courier and logistics services do you provide?', 'Do you provide B2B courier services?', 'Can I send cargo from Jodhpur to other Indian cities?', 'How can I request a logistics quote?']; const [active, setActive] = useState<number | null>(null); return <div className="faq">{questions.map((q, i) => <div className="faq-item" key={q}><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i}><span>{q}</span><ChevronDown size={18} className={active === i ? 'rotate' : ''}/></button>{active === i && <p>Tell us what you need to move, where it needs to go, and any important requirements. Our team will review your enquiry and get back to you with the next steps.</p>}</div>)}</div> }

export function PageHero({ eyebrow, title, text, image = images.hero }: { eyebrow: string; title: string; text: string; image?: string }) { return <section className="page-hero"><div className="container page-hero-grid"><div className="reveal hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p><Link href="/contact" className="button">Discuss your requirement <ArrowRight size={16}/></Link></div><div className="page-hero-image"><Image src={image} alt="Shree Balaji Enterprises logistics operations" fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section> }

export function ContactForm() { const [sent, setSent] = useState(false); return <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><ShieldCheck size={28}/><h3>Thanks for reaching out.</h3><p>Your enquiry has been noted. A team member will contact you soon.</p></div> : <><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" placeholder="+91" /></label></div><div className="form-row"><label>Email address<input type="email" name="email" placeholder="you@company.com" /></label><label>Service required<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Courier services</option><option>B2B courier</option><option>Cargo services</option><option>Goods transportation</option></select></label></div><label>How can we help?<textarea required name="message" placeholder="Tell us about your shipment or requirement" rows={5}/></label><button className="button" type="submit">Send enquiry <ArrowRight size={16}/></button></>}</form> }

export function TrustBar() { return <div className="trust-bar"><div><Truck size={21}/><span>Courier & cargo support</span></div><div><ShieldCheck size={21}/><span>Clear, customer-first service</span></div><div><MapPin size={21}/><span>Based in Jodhpur, Rajasthan</span></div><div><Clock3 size={21}/><span>Responsive communication</span></div></div> }
