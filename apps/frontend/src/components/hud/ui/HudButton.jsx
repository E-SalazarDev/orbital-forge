import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function HudButton({ children, variant = 'primary' }) {
  const isPrimary = variant === 'primary'

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        cursor-pointer rounded-sm px-5 py-3
        font-mono text-[0.65rem] uppercase tracking-[0.22em]
        transition-all duration-200
        sm:px-8 sm:text-[0.72rem]
        ${
          isPrimary
            ? 'border-0 font-bold text-white'
            : 'border bg-transparent'
        }
      `}
      style={
        isPrimary
          ? {
              background: `linear-gradient(135deg, ${P.violet}, ${P.pink})`,
              boxShadow: `0 0 32px ${P.violet}55`,
            }
          : {
              borderColor: `${P.cyan}88`,
              color: P.cyan,
            }
      }
    >
      {children}
    </motion.button>
  )
}