import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import Seo from '../seo.jsx'

const milestones = [
  { yr: '2022', h: 'The first orders', p: 'Reyco Group starts out in Ashulia with a focused set of factory partners and a clear plan: build a supplier buyers never have to chase, at a price they cannot beat.' },
  { yr: '2023', h: 'First export contract', p: 'A European retail group places its first order, won on price and on the audited standards of the factories we place work with.' },
  { yr: '2024', h: 'Woven and denim added', p: 'Growing demand for shirting and denim takes us beyond knit, adding specialist woven and denim factories to the network and a dedicated sampling team.' },
  { yr: '2025', h: 'Finishing and gifting added', p: 'We add trusted washing and finishing partners to the network, and launch the corporate gifting division so branded merchandise is held to the same standard.' },
  { yr: 'Today', h: 'A repeat-business partner', p: 'More than half of our revenue now comes from buyers who have ordered before, the clearest sign that the 2022 promise, best goods at the best price, still holds.' },
]

export default function History() {
  return (
    <>
      <Seo
        title="Our History, From 2022 to Today"
        description="How Reyco Group grew from its first orders in 2022 into a full-service apparel sourcing and supply partner with a corporate gifting division in Bangladesh."
        keywords="Reyco Group history, apparel sourcing Bangladesh, garment supplier story, company milestones"
      />
      <PageHeader
        eyebrow="Our history"
        title="Built season by season."
        sub="From the first orders in 2022 to a full-package sourcing partner with its own gifting division, on the back of buyers who kept coming back."
        crumb="Our History"
      />

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="split">
            <Reveal className="prose">
              <p className="body big">Most suppliers tell you how big they are. We would rather tell you how we got here, because the path explains the priorities.</p>
              <p className="body">Every milestone below was a decision to widen our network, take on more accountability and remove one more reason for a buyer to worry, all while keeping the price sharp. That is the whole story, repeated.</p>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="ph"><img className="cov" src="/history/our-history.jpg" alt="Reyco Group production floor, machinists at work" loading="lazy" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">The timeline</span><h2>How we<br />got here.</h2></div>
            <span className="ix mono">2022 to today</span>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.05} className="tl">
                <div className="yr">{m.yr}</div>
                <h3>{m.h}</h3>
                <p>{m.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title="Be the next chapter." text="The history above is really a list of buyers we did not want to let down. We would like to add you to it." />
    </>
  )
}
