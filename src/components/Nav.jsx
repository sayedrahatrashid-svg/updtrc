import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const company = [
  { to: '/company', label: 'Overview' },
  { to: '/history', label: 'Our History' },
  { to: '/sustainability', label: 'Sustainability' },
]

// Floating drawer + staggered link reveal
const panelV = {
  hidden: { x: '112%' },
  show: {
    x: 0,
    transition: { type: 'spring', stiffness: 320, damping: 36, mass: 0.9, staggerChildren: 0.055, delayChildren: 0.1 },
  },
  exit: { x: '112%', transition: { duration: 0.34, ease: [0.5, 0, 0.2, 1] } },
}
const navV = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } } }
const itemV = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Reyco Group home">
      <span className="knot" aria-hidden="true" />
      <span>Reyco Group<small>Knit · Woven · Denim</small></span>
    </Link>
  )
}

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)       // mobile menu
  const [dropdown, setDropdown] = useState(false) // company dropdown (desktop)
  const loc = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(false) }, [loc.pathname])

  // lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`hdr ${solid ? 'solid' : ''}`}>
      <nav className="nav">
        <Brand />

        <div className="navlinks">
          <NavLink to="/" end>Home</NavLink>

          <div
            className="hasmenu"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="menubtn" onClick={() => setDropdown((v) => !v)}>
              Company <ChevronDown size={13} strokeWidth={2.5} />
            </button>
            <AnimatePresence>
              {dropdown && (
                <motion.div className="dropdown"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                >
                  {company.map((c) => (
                    <NavLink key={c.to} to={c.to}>{c.label}</NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/capabilities">Capabilities</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/corporate-gifts" className="giftlink">Corporate Gifts</NavLink>
          <Link to="/contact" className="btn btn--quote navcta"><span>Request a quote</span></Link>
        </div>

        <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <motion.div className="progress" style={{ scaleX: progress }} />

      {/* mobile menu — floating slide-in drawer */}
      <AnimatePresence>
        {open && (
          <motion.div key="scrim" className="navscrim"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.aside key="drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Menu"
            variants={panelV} initial="hidden" animate="show" exit="exit"
          >
            <motion.span className="drawer-eyebrow" variants={itemV}>
              <span className="dknot" aria-hidden="true" />Reyco Group
            </motion.span>

            <motion.nav className="drawer-nav" variants={navV}>
              <motion.div variants={itemV}>
                <NavLink to="/" end className="m"><span>Home</span><span className="idx">01</span></NavLink>
              </motion.div>

              <motion.div className="drawer-group" variants={itemV}>
                <div className="ghead"><span>Company</span><span className="idx">02</span></div>
                <div className="drawer-sub">
                  {company.map((c) => <NavLink key={c.to} to={c.to} className="ms">{c.label}</NavLink>)}
                </div>
              </motion.div>

              <motion.div variants={itemV}>
                <NavLink to="/capabilities" className="m"><span>Capabilities</span><span className="idx">03</span></NavLink>
              </motion.div>
              <motion.div variants={itemV}>
                <NavLink to="/process" className="m"><span>Process</span><span className="idx">04</span></NavLink>
              </motion.div>
              <motion.div variants={itemV}>
                <NavLink to="/corporate-gifts" className="m"><span>Corporate Gifts</span><span className="idx">05</span></NavLink>
              </motion.div>
            </motion.nav>

            <motion.div className="drawer-foot" variants={itemV}>
              <Link to="/contact" className="btn btn--quote dcta"><span>Request a quote</span></Link>
              <p className="drawer-tag">Brief to delivery, handled.</p>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
