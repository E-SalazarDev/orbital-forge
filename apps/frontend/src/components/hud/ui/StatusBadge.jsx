import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="hud-status"
    >
      <span
        className="hud-status-dot"
        style={{
          background: P.lime,
          boxShadow: `0 0 8px ${P.lime}`,
        }}
      />

      SISTEMAS: ONLINE
    </motion.div>
  )
}