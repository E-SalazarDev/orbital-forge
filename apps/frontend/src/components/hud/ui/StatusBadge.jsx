import { motion } from 'motion/react'
import { P } from '../../../lib/palette'

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="
        hidden items-center gap-2
        text-[0.58rem] uppercase tracking-[0.18em]
        sm:flex
        lg:text-[0.65rem]
      "
    >
      <span
        className="inline-block h-1.75 w-1.75 animate-pulse rounded-full"
        style={{
          background: P.lime,
          boxShadow: `0 0 8px ${P.lime}`,
        }}
      />

      SISTEMAS: ONLINE
    </motion.div>
  )
}