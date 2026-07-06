import { Link } from 'react-router-dom'

export default function Footer() {
  const yr = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link to="/" className="brand"><span className="knot" aria-hidden="true" /><span>Reyco Group<small>Knit · Woven · Denim</small></span></Link>
            <p>A full-service apparel sourcing and supply partner. We manage knit, woven and denim production across a vetted factory network in Bangladesh, at the best price, with independently audited compliance and dependable lead times.</p>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <Link to="/company">Overview</Link>
            <Link to="/history">Our History</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/blog">Insights &amp; Articles</Link>
          </div>
          <div className="foot-col">
            <h4>Make</h4>
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/process">Process</Link>
            <Link to="/corporate-gifts">Corporate Gifts</Link>
            <Link to="/contact">Request a quote</Link>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href="mailto:info@reycogroup.com">info@reycogroup.com</a>
            <a href="tel:+447899304994">+44 7899 304994</a>
            <span style={{ color: 'var(--denim)', fontSize: 15, display: 'block', padding: '7px 0' }}>United Kingdom · Ashulia, Dhaka</span>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© {yr} Reyco Group. All rights reserved.</p>
          <p>Built to be made your own.</p>
        </div>
      </div>
    </footer>
  )
}
