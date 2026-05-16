import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudLogo() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="
        flex items-center gap-3
        font-mono text-[0.82rem] font-bold uppercase
        tracking-[0.24em]
        sm:text-[0.92rem]
        md:text-[1.05rem]
        md:tracking-[0.32em]
      "
    >
      <div
        className="
          flex h-6 w-6 items-center justify-center
          rotate-45
          sm:h-7 sm:w-7
        "
        style={{
          border: `2px solid ${P.cyan}`,
        }}
      >
        <div
          className="h-2.5 w-2.5"
          style={{
            background: P.cyan,
            boxShadow: `0 0 12px ${P.cyan}`,
          }}
        />
      </div>

      <span
        className="select-none"
        style={{
          color: P.cyan,
          textShadow: `0 0 12px ${P.cyan}88`,
        }}
      >
        NEXUS
        <span
          className="mx-1"
          style={{
            color: P.pink,
            textShadow: `0 0 12px ${P.pink}`,
          }}
        >
          ∞
        </span>
        WAR
      </span>
    </motion.div>
  )
}