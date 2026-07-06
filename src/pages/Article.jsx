import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import Seo, { SITE, breadcrumb } from '../seo.jsx'
import { getPost, posts } from '../posts.js'

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export default function Article() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <section className="sec" style={{ paddingTop: 'calc(var(--nav-h) + 14vh)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>404</span>
          <h2>Article not found.</h2>
          <p style={{ margin: '18px 0 28px', color: 'var(--ink-2)' }}>That article may have moved.</p>
          <Link to="/blog" className="btn"><span>Back to all articles</span><span className="arr">→</span></Link>
        </div>
      </section>
    )
  }

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    keywords: post.keywords,
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} keywords={post.keywords} type="article" jsonLd={jsonLd} />

      <header className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Home</Link><span>/</span><Link to="/blog">Insights</Link><span>/</span>
            <span style={{ color: '#fff' }}>{post.category}</span>
          </div>
          <span className="mono" style={{ color: 'var(--denim)', display: 'block', marginBottom: 18 }}>{fmt(post.date)} · {post.readTime} read</span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: '20ch' }}>
            {post.title}
          </motion.h1>
        </div>
      </header>

      <section className="sec sec--paper">
        <div className="wrap">
          <article className="article">
            {post.body.map((block, i) => {
              if (block.h) return <h2 key={i}>{block.h}</h2>
              if (block.list) return <ul key={i}>{block.list.map((li, j) => <li key={j}>{li}</li>)}</ul>
              return <p key={i}>{block.p}</p>
            })}
            <div className="article-foot">
              <Link to="/blog" className="btn btn--ghost"><span>← All articles</span></Link>
              <Link to="/contact" className="btn"><span>Request a quote</span><span className="arr">→</span></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="stitchhead"><div><span className="eyebrow">Keep reading</span><h2>More insights.</h2></div></div>
          <div className="blog-grid">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post">
                <div className="post-top">
                  <span className="post-cat">{p.category}</span>
                  <span className="post-meta">{fmt(p.date)} · {p.readTime}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="go">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
