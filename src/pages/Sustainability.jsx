import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import Seo from '../seo.jsx'

const pillars = [
  { k: 'Water', b: 'Closed-loop laundry', p: 'Effluent treatment and water recycling at the laundries we work with cut freshwater draw per garment, season over season.' },
  { k: 'Energy', b: 'Rooftop solar & LED', p: 'Solar generation and efficient machinery across our partner factories lower the carbon attached to every order we ship.' },
  { k: 'Material', b: 'Recycled & organic fibre', p: 'GRS- and GOTS-certified lines for brands moving toward verified sustainable content, not vague claims.' },
  { k: 'People', b: 'Fair, on-time wages', p: 'We favour factories with digital wage records, grievance channels and a workforce that is majority women in skilled, stable roles.' },
]

export default function Sustainability() {
  return (
    <>
      <Seo
        title="Sustainability: Water, Energy, Materials and Fair Work"
        description="Closed-loop laundry and water recycling, rooftop solar, GRS and GOTS certified lines, and fair, on-time wages, sustainability you can audit, not a banner on a brochure."
        keywords="sustainable apparel sourcing, recycled fabric GRS, organic cotton GOTS, water recycling textile, ethical sourcing Bangladesh"
      />
      <PageHeader
        eyebrow="The longer game"
        title="Less water. Less waste. Fair work."
        sub="Sustainability here is plumbing, metering and payroll you can audit, not a banner on a brochure."
        crumb="Sustainability"
      />

      <section className="sec sec--paper sus">
        <div className="wrap">
          <Reveal className="prose">
            <p className="lead" style={{ fontFamily: 'var(--serif)', marginBottom: 8 }}>The cheapest garment in the world is worthless to a brand if how it was made becomes the story.</p>
            <p className="body" style={{ color: 'var(--ink-2)' }}>So we treat environmental and social performance the way we treat quality: measured, recorded and open to inspection. Each pillar below is backed by data we will share, not adjectives we picked.</p>
            <ul>
              {pillars.map((p, i) => (
                <li key={i}>
                  <span className="k">{p.k}</span>
                  <div><b>{p.b}</b><p>{p.p}</p></div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <QuoteCTA title="Sourcing responsibly?" text="If your brief includes recycled content, organic fibre or specific environmental targets, tell us, we can build to it and document it." />
    </>
  )
}
