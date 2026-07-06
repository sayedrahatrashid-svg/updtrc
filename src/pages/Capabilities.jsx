import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import { img } from '../images.js'
import Seo from '../seo.jsx'

const caps = [
  { ix: 'A1', h: 'Knit tops', p: 'Tees, polos, henleys and fleece in single jersey, interlock, piqué and French terry. Tubular and open-width, fully fashioned where the design calls for it.', specs: ['80 to 320 GSM', 'MOQ 1,500 / colour'], src: img.capKnit },
  { ix: 'A2', h: 'Denim & bottoms', p: 'Five-pocket jeans, chinos, shorts and skirts. Full laundry for rinse, enzyme, stone, bleach and laser finishing, with full wash-recipe traceability.', specs: ['6 to 14 oz denim', 'Laser + ozone'], src: img.capDenim },
  { ix: 'A3', h: 'Woven shirts', p: 'Formal and casual shirting in poplin, oxford, twill and flannel. Pattern matching, structured collars and a dedicated woven sample room.', specs: ['Yarn-dyed', 'Single-needle'], src: img.clothingRack },
  { ix: 'A4', h: 'Outerwear', p: 'Jackets, padded coats and softshells with taped seams, down and synthetic fill, and weatherproof hardware to spec.', specs: ['Down / synthetic', 'Seam sealing'], src: img.capOuterwear },
  { ix: 'A5', h: 'Kidswear & infant', p: "Bodysuits, sets and layettes built to children's-product safety norms, nickel-free trims, secured snaps and full needle detection.", specs: ['CPSIA-aware', 'Needle-detected'], src: img.capKidswear },
  { ix: 'A6', h: 'Print & embroidery', p: 'Screen, pigment, discharge and DTG printing plus multi-head embroidery, managed in-network so decoration never becomes a third-party bottleneck.', specs: ['OEKO-TEX inks', '12-head embroidery'], src: img.capPrint },
]

const services = [
  { h: 'Design & development', p: 'Tech-pack interpretation, pattern development, proto and fit sampling, and a costed bill of materials before bulk.' },
  { h: 'Sourcing & best price', p: 'Yarn, fabric and trims booked against approved suppliers, and each order placed where it is made best and priced sharpest.' },
  { h: 'Laundry & finishing', p: 'Rinse, enzyme, stone, bleach, ozone and laser finishing, logged by recipe so bulk matches the approved wash.' },
  { h: 'Quality assurance', p: 'Inline checkpoints, final inspection to your AQL, 100% metal detection and pre-shipment audits you can attend.' },
]

export default function Capabilities() {
  return (
    <>
      <Seo
        title="Capabilities: Knit, Denim, Woven, Outerwear and Kidswear"
        description="Reyco Group supplies knit tops, denim and bottoms, woven shirts, outerwear, kidswear, plus print and embroidery, sourced across a vetted factory network with design, sourcing, laundry and QC managed under one partner at the best price."
        keywords="knitwear supplier, denim supplier Bangladesh, woven shirt sourcing, outerwear supplier, kidswear supplier, private label apparel, print and embroidery sourcing"
      />
      <PageHeader
        eyebrow="What we supply"
        title="Six product lines. One standard."
        sub="From a 320-GSM hoodie to a 14-oz selvedge jean, the same sourcing discipline, and the same sharp pricing, runs through every category."
        crumb="Capabilities"
      />

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="caps-grid">
            {caps.map((c, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="cap">
                <div className="capimg"><div className="ph" style={c.grad ? { background: c.grad } : undefined}>{c.src ? <img className="cov" src={c.src} alt={c.h} loading="lazy" /> : <span className="tag">[ IMAGE, {c.h} ]</span>}</div></div>
                <div className="capbody">
                  <span className="ix mono">{c.ix}</span>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                  <div className="specs">{c.specs.map((s, j) => <span key={j}>{s}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="stitchhead">
            <div><span className="eyebrow">One partner</span><h2>Services we<br />run for you.</h2></div>
            <span className="ix mono">Full service</span>
          </div>
          <div className="tiles">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07} className="tile" style={{ cursor: 'default' }}>
                <span className="ix">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title="Got a style in mind?" text="Send the tech pack or even a sketch. We will tell you honestly whether it is in our lane, and what it would cost to make well." />
    </>
  )
}
