import { useRef } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteCTA from '../components/QuoteCTA.jsx'
import { img } from '../images.js'
import Seo from '../seo.jsx'

const steps = [
  { no: '01', h: 'Sampling & costing', p: 'You send a tech pack; we send back a proto, a clean cost breakdown and a realistic timeline. No mystery line items.', tags: ['Proto · Fit · SMS', 'Open costing'] },
  { no: '02', h: 'Fabric & trims sourcing', p: 'We book yarn, fabric and trims against approved suppliers, with lab dips and bulk fabric tested before a single panel is cut.', tags: ['Lab dip approval', 'Inspected mills'] },
  { no: '03', h: 'Cutting', p: 'CAD marker-making and automated spreading keep fabric utilisation high and panel consistency tight, bundle to bundle.', tags: ['CAD markers', 'Auto-spreading'] },
  { no: '04', h: 'Sewing', p: 'Balanced lines with inline checkpoints, so quality is caught at the operation, not discovered at final inspection.', tags: ['Inline QC', 'Traffic-light boards'] },
  { no: '05', h: 'Washing & finishing', p: 'Laundry, pressing and decoration run to logged wash recipes, so a colour you approved is the colour you receive at bulk.', tags: ['Recipe traceability', 'Ozone / laser'] },
  { no: '06', h: 'Quality assurance', p: 'Final inspection to your AQL, metal detection on every piece, and pre-shipment audits you or your third party can attend.', tags: ['AQL 2.5 / 1.5', '100% needle detection'] },
  { no: '07', h: 'Packing & export', p: 'Cartoning to your manual, documentation handled, and consolidated shipment from Chattogram with live milestone updates.', tags: ['FOB / CIF / DDP', 'Shipment tracking'] },
]

function Step({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.55, margin: '0px 0px -20% 0px' })
  return (
    <motion.div ref={ref} className={`step ${inView ? 'lit' : ''}`}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}>
      <div className="no">{s.no}</div>
      <div>
        <h3>{s.h}</h3>
        <p>{s.p}</p>
        <div className="tags">{s.tags.map((t, j) => <span key={j}>{t}</span>)}</div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const spineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: spineRef, offset: ['start center', 'end center'] })

  return (
    <>
      <Seo
        title="Our Process: From Specification to Container"
        description="Seven documented stages we manage end to end across our factory network: sampling and costing, sourcing, cutting, sewing, washing, quality assurance and export, with inline QC and full recipe traceability."
        keywords="apparel production process, garment sourcing stages, managed quality control, AQL inspection, full-package supply"
      />
      <PageHeader
        eyebrow="From tech pack to container"
        title="How an order moves."
        sub="Seven documented stages, every one managed under one accountable partner. Follow the thread, it stitches itself shut as your order is completed."
        crumb="Process"
      />

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="proc-wrap" ref={spineRef}>
            <div className="spine" aria-hidden="true">
              <svg viewBox="0 0 40 600" preserveAspectRatio="none" fill="none">
                {/* faint full guide */}
                <path d="M20 0 C 6 80, 34 150, 20 230 S 6 380, 20 460 S 34 560, 20 600"
                  stroke="rgba(0,31,63,.16)" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" />
                {/* selvedge thread that draws with scroll */}
                <motion.path d="M20 0 C 6 80, 34 150, 20 230 S 6 380, 20 460 S 34 560, 20 600"
                  stroke="#DBE64C" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }} />
              </svg>
            </div>
            <div className="steps">
              {steps.map((s, i) => <Step key={i} s={s} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--ink">
        <div className="wrap">
          <div className="split">
            <Reveal className="prose">
              <span className="eyebrow" style={{ color: 'var(--denim)' }}>The point of all this</span>
              <h2 style={{ color: '#fff' }}>One record.<br />No blind spots.</h2>
              <p className="pull">"Because every stage is ours, there is never a moment where your order is in someone else's hands and out of our sight."</p>
            </Reveal>
            <Reveal delay={0.12} className="split-fig">
              <div className="ph" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,var(--indigo-2),var(--ink))' }}><img className="cov" src={img.sewingMachines} alt="Production and inspection" loading="lazy" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
