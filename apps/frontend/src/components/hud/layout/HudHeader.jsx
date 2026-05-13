import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import HudLogo from '../ui/HudLogo'
import HudNav from '../ui/HudNav'
import StatusBadge from '../ui/StatusBadge'

export default function HudHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="hud-header"
      style={{
        borderBottom: `1px solid ${P.cyan}22`,
      }}
    >
      <HudLogo />
      <HudNav />
      <StatusBadge />
    </motion.header>
  )
}