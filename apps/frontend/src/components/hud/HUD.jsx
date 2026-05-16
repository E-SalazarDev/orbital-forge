import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { P } from '../../lib/palette'

import HudHeader from './layout/HudHeader'
import HudHero from './layout/HudHero'
import HudStats from './layout/HudStats'
import HudCorners from './layout/HudCorners'
import HudEffects from './layout/HudEffects'

export default function HUD() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-0 font-mono"
      style={{ color: P.cyan }}
    >
      <AnimatePresence>
        {show && (
          <>
            <HudHeader />
            <HudHero />
            <HudStats />
            <HudCorners />
          </>
        )}
      </AnimatePresence>

      <HudEffects />
    </div>
  )
}