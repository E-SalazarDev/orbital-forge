import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import { HUD_STATS } from '../data'

export default function HudStats() {
  return (
    <motion.aside
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="
        pointer-events-none absolute bottom-6 right-4 z-10
        hidden flex-col items-end gap-2
        text-right
        md:flex
        lg:right-[4%]
      "
    >
      {HUD_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 + index * 0.15 }}
        >
          <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
            {stat.label}
          </div>

          <div
            className="text-[1.1rem] font-bold tracking-[0.12em]"
            style={{
              color: P.cyan,
              textShadow: `0 0 16px ${P.cyan}88`,
            }}
          >
            {stat.value}
          </div>
        </motion.div>
      ))}
    </motion.aside>
  )
}