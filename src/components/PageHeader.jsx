import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Hero band shared by all interior pages.
export default function PageHeader({ eyebrow, title, sub, crumb, image }) {
  return (
    <header className={`pagehead ${image ? 'has-img' : ''}`}>
      {image && <img className="pagehead-img" src={image} alt="" />}
      <div className="wrap">
        {crumb && (
          <div className="crumb">
            <Link to="/">Home</Link><span>/</span><span style={{ color: '#fff' }}>{crumb}</span>
          </div>
        )}
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >{eyebrow}</motion.span>
        <h1>
          {title.split(' ').map((w, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
              <motion.span
                style={{ display: 'inline-block', paddingRight: '0.25em' }}
                initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.05 }}
              >{w}</motion.span>
            </span>
          ))}
        </h1>
        {sub && (
          <motion.p className="sub"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >{sub}</motion.p>
        )}
      </div>
    </header>
  )
}
