import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import Seo from '../seo.jsx'

const info = [
  { k: 'Email', v: 'info@reycogroup.com' },
  { k: 'Phone', v: '+44 7899304994' },
  { k: 'Sourcing hub', v: 'Ashulia, Savar, Dhaka, Bangladesh' },
  { k: 'Office', v: 'United Kingdom · by appointment' },
]

// Submissions are emailed straight to info@reycogroup.com via FormSubmit (no backend).
// The first submission triggers a one-time confirmation email to that address; click the
// link in it once and every later enquiry lands in the inbox automatically.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@reycogroup.com'
const WHATSAPP = 'https://wa.me/447899304994?text=' + encodeURIComponent("Hi Reyco Group, I'd like a quote.")

// framer-motion: draw the success tick
const circleV = { hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } } }
const tickV = { hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.35, delay: 0.5, ease: 'easeOut' } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.55 } } }
const riseV = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const data = new FormData(form)
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact and Request a Quote"
        description="Interested in a quote? Send Reyco Group the essentials and we reply within 48 hours with our best price. Need it sooner? Message us on WhatsApp."
        keywords="apparel sourcing contact, request apparel quote, garment supplier Bangladesh contact, best price garments, whatsapp quote"
      />
      <PageHeader
        eyebrow="Start a conversation"
        title="Let's talk numbers."
        sub="Send us the essentials and a real merchandiser replies within 48 hours with our best price. Need it sooner? We're one tap away on WhatsApp."
        crumb="Contact"
      />

      <section className="sec sec--paper" id="quote-form">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <p className="body">No obligation, no hard sell. The first message just starts a conversation, your brief stays confidential, and you will always talk to a person, not a portal.</p>
              {info.map((r, i) => (
                <div className="infoline" key={i}>
                  <span className="k">{r.k}</span>
                  <span className="v">{r.v}</span>
                </div>
              ))}
              <p className="mono" style={{ marginTop: 28, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                Office hours · Sun to Thu, 09:00 to 18:00 (GMT+6)<br />
                Replies within 48 hours
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="formcard">
                {status === 'sent' ? (
                  <motion.div className="form-success" variants={stagger} initial="hidden" animate="show">
                    <motion.svg className="fs-check" viewBox="0 0 52 52" initial="hidden" animate="show">
                      <motion.circle cx="26" cy="26" r="23" variants={circleV} />
                      <motion.path d="M15 27l7.2 7.2L38 18.5" variants={tickV} />
                    </motion.svg>
                    <motion.h3 variants={riseV}>Thank you!</motion.h3>
                    <motion.p variants={riseV}>Your message is in. We'll reply within <b>48 hours</b> with our best price.</motion.p>
                    <motion.div className="fs-actions" variants={riseV}>
                      <span className="fs-sooner">Need it sooner?</span>
                      <a className="wa-btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <ChatIcon /> Chat on WhatsApp
                      </a>
                    </motion.div>
                    <motion.button variants={riseV} type="button" className="btn btn--ghost fs-again" onClick={() => setStatus('idle')}>
                      <span>Send another</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="form-hero">Interested in a quote?</h3>
                    <p className="form-hero-sub">Drop us the essentials and we'll come back with our sharpest price, fast.</p>

                    {/* FormSubmit config */}
                    <input type="hidden" name="_subject" value="New quote enquiry — reycogroup.com" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                    <div className="field"><label htmlFor="f-name">Name or company</label><input id="f-name" name="name" required autoComplete="name" placeholder="Your name or company" /></div>
                    <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></div>
                    <div className="field"><label htmlFor="f-phone">Phone <span className="opt">optional</span></label><input id="f-phone" name="phone" autoComplete="tel" placeholder="+44 …" /></div>
                    <div className="field"><label htmlFor="f-msg">Comment <span className="opt">optional</span></label><textarea id="f-msg" name="message" placeholder="Styles, quantities, target price…" /></div>

                    <button type="submit" className="btn btn--quote" disabled={status === 'sending'}>
                      <span>{status === 'sending' ? 'Connecting…' : 'Connect Now'}</span>
                      {status === 'sending' ? <span className="spin" aria-hidden="true" /> : <span className="arr">→</span>}
                    </button>
                    {status === 'error' && (
                      <p className="form-error">Something went wrong sending that. Please email <a href="mailto:info@reycogroup.com">info@reycogroup.com</a> or <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>
                    )}
                    <p className="formnote">Replies within 48 hours. No spam, ever.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
