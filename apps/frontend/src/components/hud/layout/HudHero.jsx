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
      {/* SECTOR TAG */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="relative mb-6 inline-flex items-center gap-2 border py-1 pr-3 pl-2"
        style={{
          borderColor: `${P.cyan}33`,
          background: `${P.cyan}08`,
          borderRadius: 2,
        }}
      >
        <span
          className="absolute left-0 top-0 bottom-0 w-0.5"
          style={{ background: `${P.cyan}bb`, borderRadius: '2px 0 0 2px' }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{
            background: P.cyan,
            boxShadow: `0 0 6px ${P.cyan}`,
          }}
        />
        <span
          className="text-[0.58rem] uppercase tracking-[0.35em] sm:text-[0.65rem]"
          style={{ color: `${P.cyan}bb` }}
        >
          Sector-7
        </span>
        <span
          className="h-2.5 w-px"
          style={{ background: `${P.cyan}30` }}
        />
        <span
          className="text-[0.58rem] uppercase tracking-[0.35em] sm:text-[0.65rem]"
          style={{ color: `${P.cyan}bb` }}
        >
          Guerra Intergaláctica
        </span>
      </motion.div>

      {/* TÍTULO */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 70 }}
        className="
          m-0 flex flex-col bg-clip-text leading-none
          tracking-tight text-transparent
        "
      >
        <span
          className="text-[2.5rem] font-black sm:text-[3.8rem] lg:text-[5.2rem]"
          style={{
            backgroundImage: `linear-gradient(110deg, ${P.white}, #a8d8ff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ESTALLIDO
        </span>
        <span
          className="text-[2.5rem] font-black sm:text-[3.8rem] lg:text-[5.2rem]"
          style={{
            backgroundImage: `linear-gradient(110deg, ${P.cyan}, ${P.violet})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: `drop-shadow(0 0 20px ${P.violet}55)`,
          }}
        >
          SOLAR
        </span>
      </motion.h1>

      {/* SUBTÍTULO con ticks */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="my-3 flex items-center gap-2"
      >
        <span
          className="h-px w-5 shrink-0"
          style={{ background: `${P.gold}66` }}
        />
        <p
          className="text-[1rem] font-bold uppercase tracking-[0.3em] sm:text-[1.3rem] lg:text-[1.7rem]"
          style={{
            color: P.gold,
            textShadow: `0 0 22px ${P.gold}66`,
          }}
        >
          FUEGO EN EL COSMOS
        </p>
        <span
          className="h-px w-5 shrink-0"
          style={{ background: `${P.gold}66` }}
        />
      </motion.div>

      {/* DESCRIPCIÓN */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          mb-8 max-w-[90vw] text-[0.78rem]
          leading-7 tracking-wider text-slate-400
          sm:max-w-130 sm:text-[0.82rem]
        "
      >
        Combate intergaláctico en tiempo real.
        <br />
        Personaliza tu nave. Conquista el cosmos.
      </motion.p>

      {/* BOTONES */}
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

