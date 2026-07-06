import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import Seo, { SITE } from '../seo.jsx'
import { posts } from '../posts.js'

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export default function Blog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE.name}, Insights`,
    url: SITE.url + '/blog',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${SITE.url}/blog/${p.slug}`,
      description: p.excerpt,
    })),
  }

  return (
    <>
      <Seo
        title="Insights & Articles, Apparel Sourcing, Supply & Compliance"
        description="Practical guides on apparel sourcing, garment supply in Bangladesh, compliance, sustainability and corporate gifting, from the Reyco Group team."
        keywords="apparel sourcing guide, garment supply blog, Bangladesh sourcing insights, RMG industry insights, compliance certifications"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="Insights"
        title="Notes from the trade."
        sub="Practical, jargon-free guides on apparel sourcing, supply, compliance and corporate gifting, written for the people who actually place the orders."
        crumb="Insights"
      />

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08} as="div">
                <Link to={`/blog/${p.slug}`} className="post">
                  <div className="post-top">
                    <span className="post-cat">{p.category}</span>
                    <span className="post-meta">{fmt(p.date)} · {p.readTime}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="go">Read article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
