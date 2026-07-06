import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import './components/chrome.css'
import './pages/pages.css'

import Home from './pages/Home.jsx'
import Company from './pages/Company.jsx'
import History from './pages/History.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Process from './pages/Process.jsx'
import Sustainability from './pages/Sustainability.jsx'
import CorporateGifts from './pages/CorporateGifts.jsx'
import Blog from './pages/Blog.jsx'
import Article from './pages/Article.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }) }, [pathname])
  return null
}

// Floating quote CTA — always one tap from the enquiry form (hidden on the form page itself)
function FloatingCTA() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null
  return (
    <Link to="/contact" className="fab-quote" aria-label="Request a quote">
      <span className="fab-dot" aria-hidden="true" />
      <span>Request a quote</span>
      <span className="fab-arrow" aria-hidden="true">→</span>
    </Link>
  )
}

function Page({ children }) {
  const reduce = useReducedMotion()
  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? {} : { opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/company" element={<Page><Company /></Page>} />
        <Route path="/history" element={<Page><History /></Page>} />
        <Route path="/capabilities" element={<Page><Capabilities /></Page>} />
        <Route path="/process" element={<Page><Process /></Page>} />
        <Route path="/sustainability" element={<Page><Sustainability /></Page>} />
        <Route path="/corporate-gifts" element={<Page><CorporateGifts /></Page>} />
        <Route path="/blog" element={<Page><Blog /></Page>} />
        <Route path="/blog/:slug" element={<Page><Article /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="*" element={<Page><Home /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <div className="weave" aria-hidden="true" />
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />
      <FloatingCTA />
      <Footer />
    </>
  )
}
