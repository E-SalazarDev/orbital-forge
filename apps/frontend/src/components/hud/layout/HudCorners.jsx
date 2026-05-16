import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudCorners() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8 }}
        className="
          pointer-events-none absolute bottom-4 left-4 z-10
          hidden text-[0.58rem] tracking-[0.2em]
          sm:block
        "
      >
        ◣ WARP ENGINE: READY · COORDS: 47.2 / -12.8 / 991.0
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 2.5, duration: 2.5, repeat: Infinity }}
        className="
          pointer-events-none absolute bottom-8 left-1/2 z-10
          hidden -translate-x-1/2 flex-col items-center gap-2
          text-[0.6rem] uppercase tracking-[0.35em]
          md:flex
        "
        style={{ color: P.violet }}
      >
        <div
          className="flex h-8 w-5 justify-center rounded-full pt-1"
          style={{
            border: `1.5px solid ${P.violet}66`,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1 w-1 rounded-full"
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