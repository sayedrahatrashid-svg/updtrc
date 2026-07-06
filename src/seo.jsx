import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ---------------------------------------------------------------------------
// IMPORTANT: change SITE.url to your real domain before launch (also update
// public/sitemap.xml and public/robots.txt). This drives canonical + OG URLs.
// ---------------------------------------------------------------------------
export const SITE = {
  url: 'https://www.reycogroup.com',
  name: 'Reyco Group',
  // social share image, replace with a real 1200x630 image placed in /public
  defaultImage: 'https://www.reycogroup.com/og-cover.jpg',
  twitter: '@reycogroup',
}

function meta(attr, key, content) {
  if (content == null || content === '') return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}
function link(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el) }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, keywords, image, type = 'website', jsonLd }) {
  const { pathname } = useLocation()
  const url = SITE.url + (pathname === '/' ? '' : pathname)
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name}, Apparel Sourcing & Garment Supply Partner`
  const ogImage = image || SITE.defaultImage
  const ld = jsonLd ? JSON.stringify(jsonLd) : null

  useEffect(() => {
    document.title = fullTitle
    meta('name', 'description', description)
    meta('name', 'keywords', keywords)
    meta('name', 'robots', 'index,follow,max-image-preview:large')
    link('canonical', url)

    meta('property', 'og:title', fullTitle)
    meta('property', 'og:description', description)
    meta('property', 'og:type', type)
    meta('property', 'og:url', url)
    meta('property', 'og:image', ogImage)
    meta('property', 'og:site_name', SITE.name)
    meta('property', 'og:locale', 'en_US')

    meta('name', 'twitter:card', 'summary_large_image')
    meta('name', 'twitter:title', fullTitle)
    meta('name', 'twitter:description', description)
    meta('name', 'twitter:image', ogImage)
    meta('name', 'twitter:site', SITE.twitter)

    let s = document.getElementById('page-jsonld')
    if (ld) {
      if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'page-jsonld'; document.head.appendChild(s) }
      s.textContent = ld
    } else if (s) { s.remove() }
  }, [fullTitle, description, keywords, url, ogImage, type, ld])

  return null
}

// helper: breadcrumb structured data
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: SITE.url + it.path,
    })),
  }
}
