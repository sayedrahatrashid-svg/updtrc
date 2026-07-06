import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import Seo from '../seo.jsx'
import { img } from '../images.js'
import { Gift, CupSoda, PenLine, Notebook, Shirt, Smartphone } from 'lucide-react'

const categories = [
  { ix: 'G1', icon: Gift, h: 'Branded gift sets', p: 'Curated welcome kits and client boxes, drinkware, notebook, pen and treats assembled and packed under one belly-band, your logo throughout.', specs: ['Custom curation', 'Gift-ready packaging'], src: '/corporate-gifts/gift-set.jpg' },
  { ix: 'G2', icon: CupSoda, h: 'Drinkware & bottles', p: 'Double-walled steel bottles, tumblers and travel mugs. Laser-engraved or full-colour printed, built to outlast a single campaign.', specs: ['Steel / Tritan', 'Engrave / print'], src: '/corporate-gifts/drinkware.jpg' },
  { ix: 'G3', icon: PenLine, h: 'Pens & writing', p: 'From everyday ballpoints to weighted metal pens for the people you really want to impress. Engraved or pad-printed to spec.', specs: ['Metal / plastic', 'Gift-boxed option'], src: '/corporate-gifts/pen.jpg' },
  { ix: 'G4', icon: Notebook, h: 'Notebooks & journals', p: 'A5 and A6 hardbound and soft-touch journals, debossed or printed, with matching elastic and ribbon in your brand colour.', specs: ['Deboss / print', 'PU / recycled'], src: '/corporate-gifts/notebook.jpg' },
  { ix: 'G5', icon: Shirt, h: 'Apparel & headwear', p: 'Polos, tees, hoodies and caps, decorated by embroidery, screen or transfer. Made to the same standard as the garments we supply to international retail, so quality is never an afterthought.', specs: ['Embroidery', 'Retail-grade'], src: img.apparel },
  { ix: 'G6', icon: Smartphone, h: 'Tech & lifestyle', p: 'Power banks, cables, tote bags, umbrellas and desk accessories, the practical items that keep your brand in daily use.', specs: ['Tech / lifestyle', 'Eco options'], src: '/corporate-gifts/tech.jpg' },
]

const stats = [
  { v: 500, plus: '+', lab: 'Branded SKUs sourced' },
  { v: 7, lab: 'Days to first mockup' },
  { v: 50, lab: 'Minimum order, units' },
  { v: 100, suffix: '%', lab: 'Artwork approval before print' },
]

const how = [
  { h: 'Brief & curate', p: 'Tell us the occasion, budget and headcount. We propose a curated set with mockups, not a catalogue dump.' },
  { h: 'Brand it', p: 'We apply your logo the right way for each item: engraving, embroidery, deboss or full-colour, with a digital proof before anything runs.' },
  { h: 'Assemble & pack', p: 'Items are kitted, boxed and belly-banded to order, so every recipient opens something that feels considered.' },
  { h: 'Deliver', p: 'Bulk to one address or individual drop-ship to your team and clients, anywhere, tracked end to end.' },
]

export default function CorporateGifts() {
  return (
    <>
      <Seo
        title="Corporate Gifts & Branded Merchandise"
        description="The corporate gifting division of Reyco Group: branded gift sets, drinkware, pens, notebooks, apparel and tech merchandise, sourced, branded and delivered, with low minimums."
        keywords="corporate gifts, branded merchandise, promotional products, custom gift sets, branded water bottles, branded apparel, company logo gifts, corporate gifting Bangladesh"
      />
      <PageHeader
        eyebrow="Reyco Group · Corporate Gifts"
        title="Branded gifts your clients keep."
        sub="The corporate gifting and branded merchandise division of Reyco Group. Premium gift sets, drinkware, stationery and apparel that put your brand in someone's hands and keep it there."
        crumb="Corporate Gifts"
        image={img.gifting}
      />

      {/* intro */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">The division</span><h2>Gifting,<br />done properly.</h2></div>
            <span className="ix mono">Branded merchandise</span>
          </div>
          <div className="split">
            <Reveal className="prose">
              <p className="body big">A cheap pen ends up in a drawer. A well-made, well-branded one ends up on a desk, working for you every day.</p>
              <p className="body">We handle corporate gifting end to end: sourcing, branding, kitting and delivery. Because apparel is our core business, your branded clothing is sourced and checked to the same standard as the garments we supply to international retailers, at a price that is hard to beat, not bought in and hoped for.</p>
              <p className="pull">"Promotional spend is only wasted when the product is forgettable. Ours is built to be kept."</p>
              <Link to="/contact" className="btn btn--ghost"><span>Request a gifting quote</span><span className="arr">→</span></Link>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="ph"><img className="cov" src={img.luxuryBox} alt="Premium branded gift box" loading="lazy" /></div>
              <div className="chip"><b>50+</b><span className="mono">Minimum order, start small, scale later</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* categories */}
      <section className="sec">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">What we brand</span><h2>Six gifting<br />categories.</h2></div>
            <span className="ix mono">Range</span>
          </div>
          <div className="caps-grid">
            {categories.map((c, i) => {
              const Ico = c.icon
              return (
                <Reveal key={i} delay={(i % 3) * 0.08} className="cap">
                  <div className="capimg">
                    <div className="ph">
                      {c.src
                        ? <img className="cov" src={c.src} alt={c.h} loading="lazy" />
                        : <Ico className="gift-ico" size={52} strokeWidth={1.2} aria-hidden="true" />}
                    </div>
                  </div>
                  <div className="capbody">
                    <span className="ix mono"><Ico size={13} strokeWidth={2} /> {c.ix}</span>
                    <h3>{c.h}</h3>
                    <p>{c.p}</p>
                    <div className="specs">{c.specs.map((s, j) => <span key={j}>{s}</span>)}</div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="sec sec--ink">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow" style={{ color: 'var(--denim)' }}>How we work</span><h2 style={{ color: '#fff' }}>Low minimums.<br />Fast mockups.</h2></div>
          </div>
          <div className="statgrid">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.06} className="stat">
                <div className="num"><Counter value={s.v} suffix={s.suffix || ''} plus={s.plus || ''} /></div>
                <div className="lab">{s.lab}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">Four steps</span><h2>From brief<br />to doorstep.</h2></div>
            <span className="ix mono">Process</span>
          </div>
          <div className="tiles">
            {how.map((s, i) => (
              <Reveal key={i} delay={i * 0.07} className="tile" style={{ cursor: 'default' }}>
                <span className="ix">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        kicker="Reyco Group · Corporate Gifts"
        title="Plan your next gift run."
        text="Onboarding, a client appreciation push, an event giveaway, tell us the occasion and headcount, and we'll come back with a curated set and a quote."
      />
    </>
  )
}
