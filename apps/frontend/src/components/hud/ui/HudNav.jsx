import { motion } from 'motion/react'
import { P } from '../../../lib/palette'
import { HUD_NAV_ITEMS } from '../data'

export default function HudNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-10">
      {HUD_NAV_ITEMS.map((item, index) => (
        <motion.button
          key={item}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.09 }}
          whileHover={{
            color: P.pink,
            textShadow: `0 0 12px ${P.pink}`,
          }}
          className="
            border-b border-transparent bg-transparent
            py-1
            font-mono text-[0.65rem] uppercase tracking-[0.2em]
            transition-all duration-200
            hover:border-b-pink-400
            lg:text-[0.72rem]
          "
          style={{
            color: P.cyan,
          }}
        >
          {item}
        </motion.button>
      ))}
    </nav>
  )
}