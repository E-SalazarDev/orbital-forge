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
        max-w-130
        sm:left-8
        md:left-[6%]
      "
    >
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="
          mb-3 text-[0.58rem] uppercase tracking-[0.32em]
          sm:text-[0.68rem] sm:tracking-[0.45em]
        "
        style={{
          color: P.violet,
          textShadow: `0 0 14px ${P.violet}`,
        }}
      >
        ▸ SECTOR-7 · GUERRA INTERGALÁCTICA
      </motion.p>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 70 }}
        className="
          m-0 bg-clip-text text-[2.5rem] font-black leading-none
          tracking-tight text-transparent
          sm:text-[3.8rem]
          lg:text-[5.2rem]
        "
        style={{
          backgroundImage: `linear-gradient(120deg, ${P.white}, ${P.cyan} 40%, ${P.violet})`,
        }}
      >
        ESTALLIDO SOLAR
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          my-2 text-[1.2rem] font-bold uppercase tracking-[0.14em]
          sm:text-[1.6rem]
          lg:text-[2.2rem]
        "
        style={{
          color: P.gold,
          textShadow: `0 0 28px ${P.gold}88`,
        }}
      >
        FUEGO EN EL COSMOS
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          mb-6 max-w-[90vw]
          text-[0.78rem] leading-7 tracking-wider text-slate-400
          sm:max-w-130 sm:text-[0.82rem]
        "
      >
        Combate intergaláctico en tiempo real.
        <br />
        Personaliza tu nave. Conquista el cosmos.
      </motion.p>

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