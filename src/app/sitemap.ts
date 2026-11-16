import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { const routes = ['', '/about', '/services', '/b2b-courier', '/cargo-services', '/transport-services', '/contact', '/privacy-policy', '/terms-and-conditions']; return routes.map(path => ({ url: `https://shreebalajienterprises.in${path}`, lastModified: new Date() })) }
