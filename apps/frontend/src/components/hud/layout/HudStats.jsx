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
        hidden flex-col items-end gap-0
        md:flex lg:right-[4%]
      "
    >
      {/* borde superior derecho decorativo */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="mb-3 h-px w-24 origin-right"
        style={{ background: `linear-gradient(90deg, transparent, ${P.cyan}66)` }}
      />

      {HUD_STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 + i * 0.15 }}
          className="relative flex flex-col items-end py-2.5 pl-8"
        >
          {/* separador entre items */}
          {i !== 0 && (
            <span
              className="absolute top-0 right-0 h-px w-16"
              style={{ background: `${P.cyan}18` }}
            />
          )}

          {/* label */}
          <span
            className="mb-0.5 font-mono text-[0.52rem] uppercase tracking-[0.35em]"
            style={{ color: 'rgba(140,190,240,0.45)' }}
          >
            {stat.label}
          </span>

          {/* valor + pip */}
          <div className="flex items-center gap-2">
            {/* barra lateral izquierda */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.8 + i * 0.15, duration: 0.3 }}
              className="h-5 w-px origin-bottom"
              style={{ background: `linear-gradient(0deg, ${P.cyan}99, transparent)` }}
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 + i * 0.15 }}
              className="font-mono text-[1.25rem] font-black tracking-[0.08em]"
              style={{
                color: P.cyan,
                textShadow: `0 0 20px ${P.cyan}77, 0 0 40px ${P.cyan}33`,
              }}
            >
              {stat.value}
            </motion.span>
          </div>
        </motion.div>
      ))}

      {/* borde inferior + estado online */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-3 flex items-center gap-2"
      >
        <span
          className="font-mono text-[0.45rem] uppercase tracking-[0.4em]"
          style={{ color: 'rgba(100,160,220,0.3)' }}
        >
          LIVE
        </span>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-1 w-1 rounded-full"
          style={{ background: '#44e080', boxShadow: '0 0 5px rgba(68,224,128,0.9)' }}
        />
        <span
          className="h-px w-16"
          style={{ background: `linear-gradient(90deg, transparent, ${P.cyan}44)` }}
        />
      </motion.div>
    </motion.aside>
  )
}