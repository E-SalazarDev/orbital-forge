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
      <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">

        {/* anillo giratorio exterior */}
        <motion.svg
          viewBox="0 0 44 44"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="22" cy="22" r="20"
            fill="none"
            stroke={P.pink}
            strokeWidth="0.6"
            strokeOpacity="0.25"
            strokeDasharray="3 6"
          />
          {/* punto que viaja */}
          <circle cx="22" cy="2" r="1.5" fill={P.pink} fillOpacity="0.7" />
        </motion.svg>

        {/* anillo giratorio interior inverso */}
        <motion.svg
          viewBox="0 0 44 44"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="22" cy="22" r="13"
            fill="none"
            stroke={P.violet}
            strokeWidth="0.5"
            strokeOpacity="0.3"
            strokeDasharray="2 5"
          />
        </motion.svg>

        {/* hexágono central — se dibuja al cargar */}
        <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full" fill="none">
          <motion.polygon
            points="22,6 36,14 36,30 22,38 8,30 8,14"
            stroke={P.violet}
            strokeWidth="1"
            fill={P.violet}
            fillOpacity="0.06"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          {/* líneas internas del hexágono */}
          <motion.line x1="22" y1="6"  x2="22" y2="38" stroke={P.violet} strokeWidth="0.4" strokeOpacity="0.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
          <motion.line x1="8"  y1="14" x2="36" y2="30" stroke={P.violet} strokeWidth="0.4" strokeOpacity="0.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
          <motion.line x1="36" y1="14" x2="8"  y2="30" stroke={P.violet} strokeWidth="0.4" strokeOpacity="0.2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
        </svg>

        {/* núcleo pulsante */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              `0 0 6px ${P.pink}88, 0 0 14px ${P.violet}44`,
              `0 0 14px ${P.pink}cc, 0 0 30px ${P.violet}66, 0 0 50px ${P.pink}22`,
              `0 0 6px ${P.pink}88, 0 0 14px ${P.violet}44`,
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 h-3 w-3 rotate-45"
          style={{ background: `linear-gradient(135deg, ${P.pink}, ${P.violet})` }}
        />
      </div>

      {/* ── WORDMARK ── */}
      <div className="flex flex-col leading-none gap-1">

        {/* fila principal */}
        <div className="flex items-center gap-0">
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="select-none font-mono text-[0.95rem] font-black uppercase tracking-[0.2em] sm:text-[1.05rem] md:text-[1.15rem]"
            style={{
              background: `linear-gradient(110deg, #ffffff, #e8d0ff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 12px rgba(200,140,255,0.4))`,
            }}
          >
            NEXUS
          </motion.span>

          {/* divisor con diamante */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.75, duration: 0.3 }}
            className="mx-2.5 flex flex-col items-center gap-0.5"
          >
            <span className="h-2 w-px" style={{ background: `${P.pink}44` }} />
            <span
              className="h-1 w-1 rotate-45 block"
              style={{ background: P.pink, boxShadow: `0 0 5px ${P.pink}` }}
            />
            <span className="h-2 w-px" style={{ background: `${P.pink}44` }} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="select-none font-mono text-[0.95rem] font-black uppercase tracking-[0.2em] sm:text-[1.05rem] md:text-[1.15rem]"
            style={{
              background: `linear-gradient(110deg, ${P.pink}, ${P.violet})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 14px rgba(220,60,255,0.55))`,
            }}
          >
            WAR
          </motion.span>
        </div>

        {/* línea inferior + subtag */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="block h-px w-full origin-left"
            style={{ background: `linear-gradient(90deg, ${P.pink}55, ${P.violet}33, transparent)` }}
          />
          <motion.span
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="h-1 w-1 shrink-0 rounded-full"
            style={{ background: P.pink, boxShadow: `0 0 5px ${P.pink}` }}
          />
          <span
            className="shrink-0 font-mono text-[0.42rem] uppercase tracking-[0.4em] sm:text-[0.46rem]"
            style={{ color: `${P.pink}77` }}
          >
            INTERGALACTIC WARFARE
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}