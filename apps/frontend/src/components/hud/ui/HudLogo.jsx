import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudLogo() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex items-center gap-3"
    >
      {/* ÍCONO */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute h-9 w-9 rounded-full sm:h-10 sm:w-10"
          style={{
            border: `1px solid ${P.cyan}33`,
            borderTopColor: `${P.cyan}cc`,
          }}
        />
        <motion.div
          animate={{
            boxShadow: [
              `0 0 8px ${P.cyan}44, inset 0 0 6px ${P.cyan}22`,
              `0 0 18px ${P.cyan}88, inset 0 0 10px ${P.cyan}44`,
              `0 0 8px ${P.cyan}44, inset 0 0 6px ${P.cyan}22`,
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="relative flex h-6 w-6 rotate-45 items-center justify-center sm:h-7 sm:w-7"
          style={{
            border: `1.5px solid ${P.cyan}`,
            background: `linear-gradient(135deg, ${P.cyan}18, ${P.violet}22)`,
          }}
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2"
            style={{
              background: P.cyan,
              boxShadow: `0 0 8px ${P.cyan}, 0 0 16px ${P.cyan}88`,
            }}
          />
        </motion.div>
      </div>

      {/* WORDMARK */}
      <div className="flex flex-col gap-0.5 leading-none">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="h-px w-full origin-left"
          style={{ background: `linear-gradient(90deg, ${P.cyan}88, transparent)` }}
        />
        <div className="flex items-baseline gap-1.5">
          <span
            className="select-none font-mono text-[0.9rem] font-bold uppercase tracking-[0.28em] sm:text-[1rem] md:text-[1.1rem] md:tracking-[0.35em]"
            style={{ color: P.cyan, textShadow: `0 0 16px ${P.cyan}99, 0 0 32px ${P.cyan}33` }}
          >
            NEXUS
          </span>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="select-none font-mono text-[0.7rem] font-bold"
            style={{ color: P.pink, textShadow: `0 0 10px ${P.pink}, 0 0 22px ${P.pink}66` }}
          >
            ∞
          </motion.span>
          <span
            className="select-none font-mono text-[0.9rem] font-bold uppercase tracking-[0.28em] sm:text-[1rem] md:text-[1.1rem] md:tracking-[0.35em]"
            style={{ color: `${P.cyan}cc`, textShadow: `0 0 12px ${P.cyan}66` }}
          >
            WAR
          </span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="h-px w-4/5 origin-left"
          style={{ background: `linear-gradient(90deg, ${P.violet}66, transparent)` }}
        />
      </div>
    </motion.div>
  )
}