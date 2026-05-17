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
      className="
        pointer-events-auto absolute left-0 right-0 top-0 z-20
        grid grid-cols-[1fr_auto_1fr] items-center
        gap-4
        px-4 py-4
        sm:px-6
        md:px-10
        bg-linear-to-b from-[#04020f]/90 to-transparent
        backdrop-blur-sm
      "
      style={{
        borderBottom: `1px solid ${P.cyan}22`,
      }}
    >
      <div className="justify-self-start">
        <HudLogo />
      </div>

      <div className="hidden justify-self-center md:block">
        <HudNav />
      </div>

      <div className="justify-self-end">
        <StatusBadge />
      </div>
    </motion.header>
  )
}