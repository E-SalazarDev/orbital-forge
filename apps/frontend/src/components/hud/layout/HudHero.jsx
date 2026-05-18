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
        className="mb-5 flex items-center gap-3"
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: P.pink, boxShadow: `0 0 8px ${P.pink}, 0 0 16px ${P.pink}55` }}
        />
        <span
          className="font-mono text-[0.55rem] uppercase tracking-[0.5em]"
          style={{ color: `rgba(210,130,255,0.8)` }}
        >
          Sector-7
        </span>
        <span className="h-px w-5 shrink-0" style={{ background: `rgba(200,80,255,0.3)` }} />
        <span
          className="font-mono text-[0.55rem] uppercase tracking-[0.5em]"
          style={{ color: `rgba(180,100,255,0.55)` }}
        >
          Guerra Intergaláctica
        </span>
      </motion.div>

      {/* ── CLASIFICADO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-4 flex items-center gap-2"
      >
        <span
          className="font-mono text-[0.45rem] uppercase tracking-[0.4em]"
          style={{ color: `rgba(160,70,255,0.5)` }}
        >
          CLASIFICADO
        </span>
        <span className="h-px w-10" style={{ background: `rgba(160,70,255,0.2)` }} />
        <span
          className="font-mono text-[0.45rem] tracking-[0.3em]"
          style={{ color: `rgba(255,60,172,0.4)` }}
        >
          [AX-7 · DELTA · OMEGA]
        </span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="font-mono text-[0.45rem]"
          style={{ color: `rgba(200,80,255,0.6)` }}
        >
          █
        </motion.span>
      </motion.div>

      {/* ── TÍTULOS ── */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.85, type: 'spring', stiffness: 65 }}
        className="relative mb-1 flex flex-col leading-[0.95]"
      >
        {/* ESTALLIDO */}
        <span
          className="block font-black text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: '0.05em',
            background: `linear-gradient(110deg, #ffffff 0%, #e8d8ff 60%, #c8a8ff 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: `drop-shadow(0 0 30px rgba(200,160,255,0.3))`,
          }}
        >
          ESTALLIDO
        </span>

        {/* SOLAR */}
        <div className="relative">
          <span
            className="block font-black text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem]"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.05em',
              background: `linear-gradient(110deg, #e040fb 0%, #9b30ff 40%, #ff3cac 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 25px rgba(200,40,255,0.65)) drop-shadow(0 0 60px rgba(255,60,172,0.3))`,
            }}
          >
            SOLAR
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
            className="absolute -bottom-1 left-0 block h-px w-4/5 origin-left"
            style={{
              background: `linear-gradient(90deg, rgba(200,40,255,0.8), rgba(255,60,172,0.4), transparent)`,
            }}
          />
        </div>
      </motion.div>

      {/* ── SUBTÍTULO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-5 mb-1 flex items-center gap-3"
      >
        <span className="h-px w-6 shrink-0" style={{ background: `rgba(255,60,172,0.6)` }} />
        <span
          className="font-mono text-[0.62rem] uppercase tracking-[0.55em] sm:text-[0.68rem]"
          style={{
            color: `rgba(225,140,255,0.9)`,
            textShadow: `0 0 20px rgba(200,60,255,0.55), 0 0 40px rgba(255,60,172,0.2)`,
          }}
        >
          Fuego en el cosmos
        </span>
        <span className="h-px w-6 shrink-0" style={{ background: `rgba(180,50,255,0.4)` }} />
      </motion.div>

      {/* ── DESCRIPCIÓN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mb-6 mt-4 flex flex-col gap-2"
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
              className="h-px w-3 shrink-0"
              style={{ background: `rgba(200,80,255,0.45)` }}
            />
            <span
              className="font-mono text-[0.68rem] leading-relaxed tracking-wide"
              style={{ color: 'rgba(210,180,240,0.6)' }}
            >
              {line}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── BARRA DE ESTADO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mb-6 flex items-center gap-4"
      >
        {[
          { label: 'WARP', value: 'LISTO', color: '#44e080' },
          { label: 'ESCUDOS', value: '100%', color: 'rgba(200,80,255,0.8)' },
          { label: 'ARMAMENTO', value: 'ACTIVO', color: 'rgba(255,60,172,0.8)' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65 + i * 0.08 }}
            className="flex flex-col gap-0.5"
          >
            <span
              className="font-mono text-[0.42rem] uppercase tracking-[0.35em]"
              style={{ color: `rgba(160,100,220,0.5)` }}
            >
              {s.label}
            </span>
            <span
              className="font-mono text-[0.55rem] font-bold tracking-[0.2em]"
              style={{ color: s.color, textShadow: `0 0 8px ${s.color}` }}
            >
              {s.value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── BOTONES ── */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="pointer-events-auto flex flex-col gap-3 sm:flex-row"
      >
        <HudButton variant="primary">▶ INICIAR COMBATE</HudButton>
        <HudButton variant="secondary">◈ HANGAR</HudButton>
      </motion.div>
    </motion.section>
  )
}