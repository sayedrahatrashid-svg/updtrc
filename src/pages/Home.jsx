import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import { img } from '../images.js'
import Seo, { SITE } from '../seo.jsx'
import { ShieldCheck, Layers, Gift, Truck, PenTool } from 'lucide-react'

const heroLines = ['Brief to', 'delivery,', 'handled.']

const stats = [
  { v: 3.2, dec: 1, suffix: 'M', lab: 'Garments produced each year' },
  { v: 300, suffix: 'K', lab: 'Pieces per month at peak capacity' },
  { v: 37, lab: 'Export markets served' },
  { v: 31, lab: 'Partner factories and buying houses' },
]

const reasons = [
  { icon: Layers, to: '/capabilities', h: 'Full package supply', p: 'One partner from sourcing to shipment, never a chain of vendors passing the blame.', bg: '/homepage/full-package.jpg' },
  { icon: Truck, to: '/contact', h: 'Best freight price, promised', p: 'Long-standing relationships with our freight forwarders win us better rates, and we never mark up the freight. You pay what we pay on every shipment.', bg: '/homepage/best-freight-price.jpg' },
  { icon: PenTool, to: '/capabilities', h: 'In-house design support', p: 'Our in-house design consultant can work closely with your team on development and tech packs, available as a paid add-on whenever you need that extra hand.', bg: '/homepage/design-support.jpg' },
]

// Representative high street and lifestyle brands that source from Bangladesh.
// These are TARGET / CATEGORY references, not current clients. Only display a
// logo as a client logo if the brand is a real, consented customer. Replace
// the placeholder wordmarks in /public/logos with authorised artwork when you do.
const logos = [
  { name: 'H&M', src: '/logos/hm.svg' },
  { name: 'Zara', src: '/logos/zara.svg' },
  { name: 'Uniqlo', src: '/logos/uniqlo.svg' },
  { name: 'Primark', src: '/logos/primark.svg' },
  { name: 'Next', src: '/logos/next.svg' },
  { name: 'C&A', src: '/logos/ca.svg' },
  { name: 'GAP', src: '/logos/gap.svg' },
  { name: 'Decathlon', src: '/logos/decathlon.svg' },
  { name: 'Mango', src: '/logos/mango.svg' },
  { name: 'Tom Tailor', src: '/logos/tomtailor.svg' },
]

export default function Home() {
  const reduce = useReducedMotion()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': SITE.url + '/#org',
        name: 'Reyco Group',
        url: SITE.url,
        description: 'B2B sourcing, garment production and corporate gifting partner based in Dhaka, Bangladesh, with independently audited compliance.',
        foundingDate: '2022',
        address: { '@type': 'PostalAddress', addressLocality: 'Ashulia, Savar', addressRegion: 'Dhaka', addressCountry: 'BD' },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': SITE.url + '/#website',
        url: SITE.url,
        name: 'Reyco Group',
        publisher: { '@id': SITE.url + '/#org' },
      },
    ],
  }
  return (
    <>
      <Seo
        title="Apparel Sourcing, Supply and Corporate Gifting"
        description="Reyco Group is a B2B partner for apparel sourcing, production and corporate gifting. Full-package knit, woven and denim, sourced across a vetted factory network in Bangladesh at the best price, with independently audited compliance and dependable lead times."
        keywords="apparel sourcing company, garment supplier Bangladesh, clothing sourcing partner, knitwear supplier, denim supplier, woven shirts supplier, full package apparel supplier, best price garments, corporate gifting Bangladesh, branded merchandise supplier"
        jsonLd={jsonLd}
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero-accent" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <motion.span className="eyebrow"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                Established 2022 · Sourcing, production and gifting
              </motion.span>
              <h1>
                {heroLines.map((line, i) => (
                  <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
                    <motion.span style={{ display: 'block' }}
                      initial={reduce ? false : { y: '110%' }} animate={{ y: 0 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 }}>
                      {i === 2 ? <em>handled.</em> : line}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}>
                <p className="hero-sub">Reyco Group is a B2B partner for apparel sourcing, production and corporate gifting. You send the specification. We return finished goods at the best price, on time, passing inspection and staying consistent, order after order.</p>
                <div className="hero-cta">
                  <Link to="/contact" className="btn btn--quote"><span>Request a quote</span><span className="arr">→</span></Link>
                  <Link to="/capabilities" className="btn btn--ghost"><span>See what we make</span></Link>
                </div>
                <div className="hero-meta">
                  <div><span className="mono">Shipped a year</span><b>3.2<span className="u">M</span></b></div>
                  <div><span className="mono">Partner factories</span><b>31</b></div>
                  <div><span className="mono">Markets</span><b>37</b></div>
                </div>
              </motion.div>
            </div>

            <motion.div className="hero-right"
              initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
              <div className="swatch">
                <div className="cloth">
                  <img className="clothimg" src="/homepage/hero-section.jpg" alt="Reyco design team reviewing a garment sample in the studio" />
                </div>
                <div className="srow">
                  <span>Weight<b>220 GSM</b></span>
                  <span>Fibre<b>100% Cotton</b></span>
                  <span>Lead<b>45 Days</b></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP: risk-reduction cues, immediately after hero */}
      <div className="trust">
        <span><ShieldCheck size={15} /> <b>96%</b> on time shipment</span>
        <span><Truck size={15} /> <b>Unbeatable</b> shipping rates</span>
        <span><Gift size={15} /> <b>Corporate gift</b> specialist</span>
      </div>

      {/* ABOUT */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">The company</span><h2>Built around the&nbsp;stitch.</h2></div>
            <span className="ix mono">01 · Who we are</span>
          </div>
          <div className="split">
            <Reveal className="prose">
              <p className="body big">We began in 2022 with a small, disciplined team and one promise: ship goods a buyer never has to second guess, at a price no one can beat. That promise still runs everything we do today.</p>
              <p className="body">Reyco Group is a full-package sourcing partner. We manage every stage, from sourcing and pattern development through cutting, sewing, washing and finishing, across a vetted factory network, so your team works with one accountable point of contact, and one sharp price, instead of a chain of suppliers.</p>
              <p className="pull">"Full package, fully managed, on the record. Nothing about your order leaves a folder we control."</p>
              <Link to="/company" className="btn btn--ghost"><span>More about us</span><span className="arr">→</span></Link>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="swatch swatch--plain">
                <div className="cloth">
                  <img className="clothimg" src="/homepage/HP-who-we-are.jpg" alt="Close-up of a Reyco machinist stitching fabric on a sewing machine" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sec sec--ink">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow" style={{ color: 'var(--denim)' }}>Capacity at a glance</span><h2 style={{ color: '#fff' }}>The numbers<br />that ship.</h2></div>
            <span className="ix mono">02 · Scale</span>
          </div>
          <div className="statgrid">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.06} className="stat">
                <div className="num"><Counter value={s.v} decimals={s.dec || 0} suffix={s.suffix || ''} plus={s.plus || ''} /></div>
                <div className="lab">{s.lab}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE REASONS: visual icon cards */}
      <section className="sec">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">Why buyers choose us</span><h2>Three reasons<br />buyers sign.</h2></div>
            <span className="ix mono">03 · The case</span>
          </div>
          <div className="icards">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={i} delay={i * 0.1} as="div">
                  <Link to={r.to} className="icard">
                    {r.bg && <span className="icard-bg" style={{ backgroundImage: `url("${r.bg}")` }} aria-hidden="true" />}
                    <span className="icard-ico"><Icon size={26} strokeWidth={1.6} /></span>
                    <h3>{r.h}</h3>
                    <p>{r.p}</p>
                    <span className="go">Explore →</span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* LOGO TICKER: representative retail tier we are built to supply */}
      <section className="clients">
        <p className="lbl mono">Built to supply high street and lifestyle retail</p>
        <div className="marquee">
          <div className="track">
            {logos.map((l, i) => (
              <img key={i} className="brandlogo" src={l.src} alt={`${l.name} logo`} loading="lazy" />
            ))}
          </div>
          <div className="track" aria-hidden="true">
            {logos.map((l, i) => (
              <img key={i} className="brandlogo" src={l.src} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE GIFTS cross-link */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="split rev">
            <Reveal className="prose">
              <span className="eyebrow">Also from Reyco Group</span>
              <h2>Corporate gifts<br />&amp; branded merch.</h2>
              <p className="body" style={{ marginTop: 18 }}>Beyond bulk apparel, our gifting division supplies branded gift sets, drinkware, stationery and merchandise, decorated to spec and delivered worldwide. The same standard, with smaller minimums.</p>
              <Link to="/corporate-gifts" className="btn"><span>Explore corporate gifts</span><span className="arr">→</span></Link>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="ph"><img className="cov" src={img.gifting} alt="Branded corporate gift set" loading="lazy" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
