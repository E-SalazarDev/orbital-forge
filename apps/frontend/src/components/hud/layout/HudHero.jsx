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
        max-w-130 sm:left-8 md:left-[6%]
      "
    >
      {/* ── SECTOR TAG ── */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative mb-8 flex items-center gap-0"
      >
        {/* barra izquierda */}
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="mr-3 inline-block h-8 w-px origin-top shrink-0"
          style={{ background: `linear-gradient(180deg, ${P.cyan}, transparent)` }}
        />

        <div className="flex flex-col gap-1">
          {/* fila superior */}
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1 w-1 shrink-0 rounded-full"
              style={{ background: P.cyan, boxShadow: `0 0 6px ${P.cyan}` }}
            />
            <span
              className="font-mono text-[0.52rem] uppercase tracking-[0.5em]"
              style={{ color: `${P.cyan}99` }}
            >
              SECTOR-7
            </span>
            <span
              className="h-px w-8"
              style={{ background: `${P.cyan}33` }}
            />
            <span
              className="font-mono text-[0.52rem] uppercase tracking-[0.5em]"
              style={{ color: `${P.cyan}55` }}
            >
              GUERRA INTERGALÁCTICA
            </span>
          </div>

          {/* línea de datos */}
          <div className="flex items-center gap-1.5">
            {['ALFA', 'DELTA', 'OMEGA'].map((code, i) => (
              <motion.span
                key={code}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="font-mono text-[0.42rem] tracking-[0.3em]"
                style={{ color: `${P.violet}66` }}
              >
                [{code}]
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="font-mono text-[0.42rem]"
              style={{ color: `${P.cyan}88` }}
            >
              █
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* ── TÍTULO ── */}
      <div className="relative mb-2 flex flex-col leading-none">

        {/* ESTALLIDO */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 60 }}
          className="relative"
        >
          {/* número de versión flotante */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute -top-3 left-1 font-mono text-[0.45rem] tracking-[0.4em]"
            style={{ color: `${P.cyan}55` }}
          >
            VER.2.4.1 ──
          </motion.span>

          <span
            className="block font-black text-[2.5rem] sm:text-[3.8rem] lg:text-[5.5rem]"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.04em',
              color: '#e8f4ff',
              textShadow: `
                0 0 80px rgba(120,200,255,0.15),
                0 1px 0 rgba(0,0,0,0.8),
                0 -1px 0 rgba(255,255,255,0.05)
              `,
            }}
          >
            ESTALLIDO
          </span>
        </motion.div>

        {/* SOLAR */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.05, type: 'spring', stiffness: 60 }}
          className="relative"
        >
          <span
            className="block font-black text-[2.5rem] sm:text-[3.8rem] lg:text-[5.5rem]"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '0.04em',
              background: `linear-gradient(105deg, #38d9ff 0%, #7c5dff 45%, #d44fff 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 30px rgba(80,180,255,0.5)) drop-shadow(0 0 80px rgba(140,60,255,0.25))`,
            }}
          >
            SOLAR
          </span>

          {/* línea de acento debajo */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -bottom-1 left-0 h-px origin-left"
            style={{
              width: '100%',
              background: `linear-gradient(90deg, ${P.cyan}88, ${P.violet}44, transparent)`,
            }}
          />
        </motion.div>
      </div>

      {/* ── SUBTÍTULO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-5 mb-1 flex items-center gap-3"
      >
        {/* bloque izquierdo */}
        <div className="flex flex-col gap-0.5">
          <span className="h-px w-10" style={{ background: `${P.gold}55` }} />
          <span className="h-px w-6" style={{ background: `${P.gold}22` }} />
        </div>

        <span
          className="font-mono text-[0.68rem] uppercase tracking-[0.55em] sm:text-[0.78rem] lg:text-[0.88rem]"
          style={{
            color: P.gold,
            textShadow: `0 0 20px ${P.gold}55`,
          }}
        >
          FUEGO EN EL COSMOS
        </span>

        {/* bloque derecho */}
        <div className="flex flex-col gap-0.5">
          <span className="h-px w-6" style={{ background: `${P.gold}22` }} />
          <span className="h-px w-10" style={{ background: `${P.gold}55` }} />
        </div>
      </motion.div>

      {/* ── DESCRIPCIÓN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 mt-4 flex flex-col gap-1"
      >
        {['Combate intergaláctico en tiempo real.', 'Personaliza tu nave. Conquista el cosmos.'].map((line, i) => (
          <motion.div
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.55 + i * 0.1 }}
            className="flex items-center gap-2"
          >
            <span
              className="h-px w-3 shrink-0"
              style={{ background: `${P.cyan}33` }}
            />
            <span
              className="font-mono text-[0.7rem] tracking-wider"
              style={{ color: 'rgba(160,195,235,0.45)' }}
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