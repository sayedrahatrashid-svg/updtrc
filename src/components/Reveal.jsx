import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal. Wrap any block; it fades + rises into view once.
export default function Reveal({ children, delay = 0, y = 26, as = 'div', className = '', ...rest }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
