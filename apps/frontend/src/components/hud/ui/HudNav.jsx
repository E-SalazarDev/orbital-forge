import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import { HUD_NAV_ITEMS } from '../data'

export default function HudNav() {
  return (
    <nav className="hud-nav">
      {HUD_NAV_ITEMS.map((item, index) => (
        <motion.button
          key={item}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.09 }}
          className="hud-nav-button"
          style={{
            color: P.cyan,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = P.pink
            e.currentTarget.style.borderBottom = `1px solid ${P.pink}`
            e.currentTarget.style.textShadow = `0 0 12px ${P.pink}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = P.cyan
            e.currentTarget.style.borderBottom = '1px solid transparent'
            e.currentTarget.style.textShadow = 'none'
          }}
        >
          {item}
        </motion.button>
      ))}
    </nav>
  )
}