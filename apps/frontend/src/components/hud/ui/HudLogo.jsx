import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="flex items-center gap-3"
    >
      {/* ── ÍCONO ── */}
      <div className="relative flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">

        {/* hexágono exterior */}
        <svg
          viewBox="0 0 40 40"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <motion.polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            stroke={P.cyan}
            strokeWidth="1"
            strokeOpacity="0.35"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          />
          <motion.polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            stroke={P.cyan}
            strokeWidth="0.5"
            strokeOpacity="0.15"
            fill={P.cyan}
            fillOpacity="0.04"
            animate={{ fillOpacity: [0.04, 0.09, 0.04] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>

        {/* cruz interior */}
        <svg
          viewBox="0 0 40 40"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <motion.line
            x1="20" y1="8" x2="20" y2="32"
            stroke={P.cyan}
            strokeWidth="0.75"
            strokeOpacity="0.3"
          />
          <motion.line
            x1="8" y1="20" x2="32" y2="20"
            stroke={P.cyan}
            strokeWidth="0.75"
            strokeOpacity="0.3"
          />
        </svg>

        {/* núcleo — diamante pulsante */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              `0 0 6px ${P.cyan}66`,
              `0 0 16px ${P.cyan}cc, 0 0 32px ${P.cyan}44`,
              `0 0 6px ${P.cyan}66`,
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 h-3 w-3 rotate-45"
          style={{ background: P.cyan }}
        />
      </div>

      {/* ── WORDMARK ── */}
      <div className="flex flex-col leading-none">

        {/* fila principal */}
        <div className="flex items-center gap-0">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="select-none font-mono text-[0.95rem] font-black uppercase tracking-[0.22em] sm:text-[1.05rem] md:text-[1.15rem]"
            style={{
              color: P.white,
              textShadow: `0 0 20px ${P.cyan}55`,
            }}
          >
            NEXUS
          </motion.span>

          {/* divisor vertical */}
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.75, duration: 0.3 }}
            className="mx-2 inline-block h-3.5 w-px origin-top"
            style={{ background: `${P.cyan}55` }}
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="select-none font-mono text-[0.95rem] font-black uppercase tracking-[0.22em] sm:text-[1.05rem] md:text-[1.15rem]"
            style={{
              color: P.cyan,
              textShadow: `0 0 18px ${P.cyan}88`,
            }}
          >
            WAR
          </motion.span>
        </div>

        {/* subtag */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-0.5 flex items-center gap-1.5"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1 w-1 rounded-full"
            style={{ background: P.pink, boxShadow: `0 0 5px ${P.pink}` }}
          />
          <span
            className="font-mono text-[0.45rem] uppercase tracking-[0.45em] sm:text-[0.5rem]"
            style={{ color: `${P.pink}99` }}
          >
            INTERGALACTIC WARFARE
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}