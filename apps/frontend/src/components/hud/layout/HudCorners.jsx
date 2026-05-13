import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudCorners() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8 }}
        className="hud-bottom-left"
      >
        ◣ WARP ENGINE: READY · COORDS: 47.2 / -12.8 / 991.0
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2.5, duration: 2.5, repeat: Infinity }}
        className="hud-drag-indicator"
        style={{
          color: P.violet,
        }}
      >
        <div
          className="hud-mouse"
          style={{
            border: `1.5px solid ${P.violet}66`,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="hud-mouse-dot"
            style={{
              background: P.violet,
            }}
          />
        </div>

        DRAG TO EXPLORE
      </motion.div>
    </>
  )
}