import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import { img } from '../images.js'
import Seo from '../seo.jsx'

const facts = [
  { v: 3.2, dec: 1, suffix: 'M', lab: 'Garments shipped each year' },
  { v: 31, lab: 'Partner factories & buying houses' },
  { v: 37, lab: 'Export markets served' },
  { v: 96, suffix: '%', lab: 'On time shipment rate' },
  { v: 55, suffix: '%', lab: 'Revenue from repeat buyers' },
  { v: 7, lab: 'Days to a costed quote' },
]

const values = [
  { h: 'One accountable partner', p: 'You deal with one team, not a chain of vendors. We manage sourcing, production, washing, finishing and QC across our factory network, on a single line of accountability.' },
  { h: 'Best price, kept honest', p: 'Because we source across a vetted network rather than carry one factory’s overheads, we secure genuinely competitive pricing, and we never mark up your freight.' },
  { h: 'Plans we can keep', p: 'We quote lead times we intend to hit, then protect them with real capacity planning across partners instead of optimism.' },
  { h: 'Show our work', p: 'Open costing, traceable wash recipes and full access to the factories on your order. The more a buyer can see, the less they take on faith.' },
]

export default function Company() {
  return (
    <>
      <Seo
        title="Company — Apparel Sourcing & Supply Partner"
        description="Reyco Group is a full-service apparel sourcing and supply partner. We manage knit, woven and denim production across a vetted factory network in Bangladesh, delivering the best price with one accountable point of contact."
        keywords="apparel sourcing partner, garment supply company, clothing sourcing Dhaka, full package apparel supplier, best price garments Bangladesh"
      />
      <PageHeader
        eyebrow="The company"
        title="A full-package partner, from brief to container."
        sub="Reyco Group takes your design from specification to loaded container, sourced across a vetted factory network at the best price, and stays accountable for every stage in between."
        crumb="Company"
      />

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="split">
            <Reveal className="prose">
              <p className="body big">We are a full-service apparel sourcing and supply partner, working across a vetted factory network on the industrial edge of Dhaka.</p>
              <p className="body">Your order does not get passed between a fabric house, a cutting unit, a stitching floor and a separate laundry, each one blaming the last when something slips. We manage it through one team, on a single record, from first cost to loaded container, and we place it where it will be made best and priced sharpest.</p>
              <p className="body">The result is the thing a sourcing manager actually wants: predictable quality, honest timelines, the best price on the table, and a single phone number when a question comes up the night before a shipment.</p>
              <Link to="/process" className="btn btn--ghost"><span>See how an order moves</span><span className="arr">→</span></Link>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="ph"><img className="cov" src={img.clothingRack} alt="Finished Reyco Group garments ready for export" loading="lazy" /></div>
              <div className="chip"><b>31</b><span className="mono">Vetted partner factories across Bangladesh</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec sec--ink">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow" style={{ color: 'var(--denim)' }}>By the numbers</span><h2 style={{ color: '#fff' }}>Where we stand.</h2></div>
          </div>
          <div className="statgrid cols3">
            {facts.map((f, i) => (
              <Reveal key={i} delay={i * 0.05} className="stat">
                <div className="num"><Counter value={f.v} decimals={f.dec || 0} suffix={f.suffix || ''} plus={f.plus || ''} /></div>
                <div className="lab">{f.lab}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">What we run on</span><h2>Four operating<br />principles.</h2></div>
            <span className="ix mono">Mission</span>
          </div>
          <div className="tiles">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.07} className="tile" style={{ cursor: 'default' }}>
                <span className="ix">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
