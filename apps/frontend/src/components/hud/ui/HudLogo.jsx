import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudLogo() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="hud-logo"
    >
      <div
        className="hud-logo-icon"
        style={{
          border: `2px solid ${P.cyan}`,
        }}
      >
        <div
          className="hud-logo-dot"
          style={{
            background: P.cyan,
            boxShadow: `0 0 12px ${P.cyan}`,
          }}
        />
      </div>

      NEXUS<span style={{ color: P.pink }}>∞</span>WAR
    </motion.div>
  )
}