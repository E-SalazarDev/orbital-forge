import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import { HUD_STATS } from '../data'

export default function HudStats() {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="hud-stats"
    >
      {HUD_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 + index * 0.15 }}
          className="hud-stat-item"
        >
          <div className="hud-stat-label">{stat.label}</div>
          <div
            className="hud-stat-value"
            style={{
              color: P.cyan,
              textShadow: `0 0 16px ${P.cyan}88`,
            }}
          >
            {stat.value}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}