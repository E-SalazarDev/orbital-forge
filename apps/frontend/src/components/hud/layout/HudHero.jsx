import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import HudButton from '../ui/HudButton'

export default function HudHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="
        pointer-events-none absolute bottom-[12%] left-4 z-10
        max-w-110 sm:left-8 md:left-[6%]
      "
    >
      {/* ── SECTOR TAG ── */}
      <motion.div
        initial={{ x: -16, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mb-6 flex items-center gap-3"
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1 w-1 shrink-0 rounded-full"
          style={{ background: P.pink, boxShadow: `0 0 6px ${P.pink}` }}
        />
        <span
          className="font-mono text-[0.5rem] uppercase tracking-[0.55em]"
          style={{ color: `${P.violet}88` }}
        >
          Sector-7
        </span>
        <span className="h-px w-4 shrink-0" style={{ background: `${P.violet}33` }} />
        <span
          className="font-mono text-[0.5rem] uppercase tracking-[0.55em]"
          style={{ color: `${P.violet}55` }}
        >
          Guerra Intergaláctica
        </span>
      </motion.div>

      {/* ── TÍTULO ── */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.85, type: 'spring', stiffness: 65 }}
        className="relative mb-1 flex flex-col leading-[0.95]"
      >
        {/* ESTALLIDO */}
        <span
          className="block font-black text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: '0.06em',
            color: '#eff2ff',
            textShadow: `0 0 40px rgba(200,180,255,0.18), 0 2px 0 rgba(0,0,0,0.6)`,
          }}
        >
          ESTALLIDO
        </span>

        {/* SOLAR */}
        <div className="relative">
          <span
            className="block font-black text-[2rem] sm:text-[2.8rem] lg:text-[3.6rem]"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.06em',
              background: `linear-gradient(110deg, #c44dff 0%, #8b2fff 40%, #ff3cac 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 18px rgba(180,50,255,0.55)) drop-shadow(0 0 50px rgba(255,60,172,0.2))`,
            }}
          >
            SOLAR
          </span>

          {/* línea de acento */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.7, ease: 'easeOut' }}
            className="absolute -bottom-1 left-0 block h-px w-3/4 origin-left"
            style={{
              background: `linear-gradient(90deg, rgba(180,50,255,0.7), rgba(255,60,172,0.4), transparent)`,
            }}
          />
        </div>
      </motion.div>

      {/* ── SUBTÍTULO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 mb-1 flex items-center gap-3"
      >
        <span className="h-px w-5 shrink-0" style={{ background: `rgba(255,60,172,0.4)` }} />
        <span
          className="font-mono text-[0.6rem] uppercase tracking-[0.55em] sm:text-[0.65rem]"
          style={{
            color: `rgba(200,120,255,0.65)`,
            textShadow: `0 0 16px rgba(180,50,255,0.4)`,
          }}
        >
          Fuego en el cosmos
        </span>
        <span className="h-px w-5 shrink-0" style={{ background: `rgba(180,50,255,0.3)` }} />
      </motion.div>

      {/* ── DESCRIPCIÓN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mb-8 mt-4 flex flex-col gap-1.5"
      >
        {[
          'Combate intergaláctico en tiempo real.',
          'Personaliza tu nave. Conquista el cosmos.',
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ x: -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.45 + i * 0.1 }}
            className="flex items-center gap-2.5"
          >
            <span
              className="h-px w-2.5 shrink-0"
              style={{ background: `rgba(180,50,255,0.3)` }}
            />
            <span
              className="font-mono text-[0.68rem] leading-relaxed tracking-wide"
              style={{ color: 'rgba(180,160,210,0.45)' }}
            >
              {line}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── BOTONES ── */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="pointer-events-auto flex flex-col gap-3 sm:flex-row"
      >
        <HudButton variant="primary">▶ INICIAR COMBATE</HudButton>
        <HudButton variant="secondary">◈ HANGAR</HudButton>
      </motion.div>
    </motion.section>
  )
}