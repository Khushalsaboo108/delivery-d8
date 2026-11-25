import type { MetadataRoute } from 'next'

const baseUrl = 'https://shreebalajienterprises.in'

const routes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/b2b-courier', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cargo-services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/transport-services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
