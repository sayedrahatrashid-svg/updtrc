import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function QuoteCTA({ kicker = 'Start a conversation', title = 'Send us your tech pack.', text = "Tell us what you're building. You'll hear back from a real merchandiser, usually within one business day, with honest feasibility and an indicative cost." }) {
  return (
    <section className="sec sec--ink ctaband">
      <div className="wrap ctaband-in">
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--denim)' }}>{kicker}</span>
          <h2 style={{ color: '#fff', maxWidth: '14ch' }}>{title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="ctaband-r">
          <p>{text}</p>
          <Link to="/contact" className="btn btn--quote"><span>Request a quote</span><span className="arr">→</span></Link>
        </Reveal>
      </div>
    </section>
  )
}
