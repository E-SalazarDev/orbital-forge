import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { P } from '../../lib/palette'

// ─── HUD OVERLAY ──────────────────────────────────────────────────────────────
export default function HUD() {
  const [show, setShow] = useState(false)
  useEffect(() => { const t = setTimeout(() => setShow(true), 400); return () => clearTimeout(t) }, [])
  const nav = ['HANGAR', 'MISIONES', 'TRIPULACIÓN', 'GALAXY MAP']

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', fontFamily: '"Courier New", monospace', color: P.cyan }}>
      <AnimatePresence>
        {show && (
          <motion.header
            initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 40px',
              background: 'linear-gradient(180deg,rgba(4,2,15,0.85) 0%,transparent 100%)',
              borderBottom: `1px solid ${P.cyan}22`,
              backdropFilter: 'blur(4px)',
              pointerEvents: 'all',
            }}
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', letterSpacing: '0.32em', fontWeight: 700, textTransform: 'uppercase' }}
            >
              <div style={{ width: 28, height: 28, border: `2px solid ${P.cyan}`, transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 10, height: 10, background: P.cyan, boxShadow: `0 0 12px ${P.cyan}` }} />
              </div>
              NEXUS<span style={{ color: P.pink }}>∞</span>WAR
            </motion.div>

            <nav style={{ display: 'flex', gap: '2.4rem' }}>
              {nav.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.09 }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: P.cyan, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 0', borderBottom: '1px solid transparent', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => { e.currentTarget.style.color = P.pink; e.currentTarget.style.borderBottom = `1px solid ${P.pink}`; e.currentTarget.style.textShadow = `0 0 12px ${P.pink}` }}
                  onMouseLeave={e => { e.currentTarget.style.color = P.cyan; e.currentTarget.style.borderBottom = '1px solid transparent'; e.currentTarget.style.textShadow = 'none' }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: P.lime, boxShadow: `0 0 8px ${P.lime}`, animation: 'pulse 2s infinite', display: 'inline-block' }} />
              SISTEMAS: ONLINE
            </motion.div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* HERO */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ position: 'absolute', bottom: '14%', left: '6%', maxWidth: 520, pointerEvents: 'none' }}
          >
            <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}
              style={{ fontSize: '0.68rem', letterSpacing: '0.45em', color: P.violet, textTransform: 'uppercase', marginBottom: '0.9rem', textShadow: `0 0 14px ${P.violet}` }}
            >
              ▸ SECTOR-7 · GUERRA INTERGALÁCTICA
            </motion.p>

            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, type: 'spring', stiffness: 70 }}
              style={{ margin: 0, lineHeight: 1.0, fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)', fontWeight: 900, letterSpacing: '-0.02em', background: `linear-gradient(120deg, ${P.white}, ${P.cyan} 40%, ${P.violet})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
             ESTALLIDO SOLAR
            </motion.h1>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
              style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: P.gold, fontWeight: 700, letterSpacing: '0.18em', margin: '0.4rem 0 1.4rem', textShadow: `0 0 28px ${P.gold}88` }}
            >
              FUEGO EN EL COSMOS
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.75, letterSpacing: '0.05em', marginBottom: '2rem' }}
            >
              Combate intergaláctico en tiempo real.<br />
              Personaliza tu nave. Conquista el cosmos.
            </motion.p>

            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.7 }}
              style={{ display: 'flex', gap: '1rem', pointerEvents: 'all' }}
            >
              <button
                style={{ padding: '0.75rem 2.2rem', background: `linear-gradient(135deg, ${P.violet}, ${P.pink})`, border: 'none', borderRadius: '2px', cursor: 'pointer', color: '#fff', fontFamily: 'inherit', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 700, boxShadow: `0 0 32px ${P.violet}55`, transition: 'transform 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 0 48px ${P.violet}88` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 0 32px ${P.violet}55` }}
              >
                ▶ INICIAR COMBATE
              </button>
              <button
                style={{ padding: '0.75rem 2.2rem', background: 'transparent', border: `1px solid ${P.cyan}88`, borderRadius: '2px', cursor: 'pointer', color: P.cyan, fontFamily: 'inherit', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${P.cyan}15`; e.currentTarget.style.borderColor = P.cyan }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${P.cyan}88` }}
              >
                ◈ HANGAR
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STATS */}
      <AnimatePresence>
        {show && (
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }}
            style={{ position: 'absolute', bottom: '6%', right: '4%', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', pointerEvents: 'none' }}
          >
            {[{ label: 'PILOTOS ACTIVOS', value: '2,847' }, { label: 'BATALLAS HOY', value: '1,204' }, { label: 'SISTEMAS', value: '47' }].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 + i * 0.15 }} style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: P.cyan, textShadow: `0 0 16px ${P.cyan}88`, letterSpacing: '0.12em' }}>{s.value}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM CORNERS */}
      {show && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.8 }}
            style={{ position: 'absolute', bottom: '3%', left: '2%', fontSize: '0.58rem', letterSpacing: '0.2em' }}
          >
            ◣ WARP ENGINE: READY · COORDS: 47.2 / -12.8 / 991.0
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ delay: 2.5, duration: 2.5, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '4%', left: '50%', transform: 'translateX(-50%)', fontSize: '0.6rem', letterSpacing: '0.35em', color: P.violet, textTransform: 'uppercase', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
          >
            <div style={{ width: 20, height: 32, border: `1.5px solid ${P.violet}66`, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 4, height: 4, borderRadius: '50%', background: P.violet }} />
            </div>
            DRAG TO EXPLORE
          </motion.div>
        </>
      )}

      {/* SCANLINES + VIGNETTE */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(34,211,238,0.008) 2px,rgba(34,211,238,0.008) 4px)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center,transparent 45%,rgba(4,2,15,0.75) 100%)' }} />

      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}`}</style>
    </div>
  )
}