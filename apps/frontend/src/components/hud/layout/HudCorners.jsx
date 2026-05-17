import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudCorners() {
  return (
    <>
      {/* ── STATUS BAR inferior izquierda ── */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="
          pointer-events-none absolute bottom-5 left-4 z-10
          hidden sm:flex items-center gap-3
        "
      >
        {/* pip de estado */}
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{
            background: '#44e080',
            boxShadow: '0 0 6px rgba(68,224,128,0.9)',
          }}
        />

        {/* separador vertical */}
        <span
          className="h-3 w-px shrink-0"
          style={{ background: 'rgba(150,200,255,0.18)' }}
        />

        {/* texto de coordenadas */}
        <span
          className="text-[0.55rem] tracking-[0.28em] uppercase"
          style={{ color: 'rgba(140,190,240,0.45)', fontFamily: 'monospace' }}
        >
          WARP ENGINE: READY
        </span>

        <span
          className="h-3 w-px shrink-0"
          style={{ background: 'rgba(150,200,255,0.12)' }}
        />

        <span
          className="text-[0.55rem] tracking-[0.22em]"
          style={{ color: 'rgba(100,160,220,0.35)', fontFamily: 'monospace' }}
        >
          COORDS: 47.2 / -12.8 / 991.0
        </span>
      </motion.div>

      {/* ── DRAG / SCROLL indicator centro-bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ delay: 2.5, duration: 2.8, repeat: Infinity }}
        className="
          pointer-events-none absolute bottom-6 left-1/2 z-10
          hidden md:flex -translate-x-1/2 flex-col items-center gap-2.5
        "
      >
        {/* label superior */}
        <span
          className="text-[0.52rem] uppercase tracking-[0.45em]"
          style={{ color: `${P.violet}99` }}
        >
          DRAG TO EXPLORE
        </span>

        {/* mouse outline moderno */}
        <div
          className="relative flex h-9 w-5 justify-center rounded-full pt-1.5"
          style={{ border: `1px solid ${P.violet}55` }}
        >
          {/* líneas laterales decorativas */}
          <span
            className="absolute -left-2 top-1/2 h-px w-1.5"
            style={{ background: `${P.violet}44`, transform: 'translateY(-50%)' }}
          />
          <span
            className="absolute -right-2 top-1/2 h-px w-1.5"
            style={{ background: `${P.violet}44`, transform: 'translateY(-50%)' }}
          />

          {/* dot que baja */}
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1 w-1 rounded-full shrink-0"
            style={{ background: P.violet }}
          />
        </div>

        {/* flechas escalonadas */}
        <div className="flex flex-col items-center gap-0.5">
          {[0.15, 0.3, 0.45].map((delay, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: 1.4, repeat: Infinity, delay }}
              className="text-[0.5rem]"
              style={{ color: `${P.violet}88` }}
            >
              ▼
            </motion.span>
          ))}
        </div>
      </motion.div>
    </>
  )
}