import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import HudButton from '../ui/HudButton'

export default function HudHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="hud-hero"
    >
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hud-sector"
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
        className="hud-title"
        style={{
          background: `linear-gradient(120deg, ${P.white}, ${P.cyan} 40%, ${P.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        ESTALLIDO SOLAR
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hud-subtitle"
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
        className="hud-description"
      >
        Combate intergaláctico en tiempo real.
        <br />
        Personaliza tu nave. Conquista el cosmos.
      </motion.p>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="hud-actions"
      >
        <HudButton variant="primary">▶ INICIAR COMBATE</HudButton>
        <HudButton variant="secondary">◈ HANGAR</HudButton>
      </motion.div>
    </motion.div>
  )
}