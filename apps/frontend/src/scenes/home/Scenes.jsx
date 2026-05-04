import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls, Stars, Sparkles, Float, Trail,
  MeshDistortMaterial, Outlines,
} from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'motion/react'

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const P = {
  cyan:    '#22d3ee',
  violet:  '#7c3aed',
  pink:    '#ec4899',
  gold:    '#f59e0b',
  lime:    '#84cc16',
  white:   '#e0f2fe',
  bg:      '#04020f',
}

// ─── NAVE PRINCIPAL — 100% primitivas Three.js, estilo retro cel-shade ────────
function MainShip({ position = [0, 0, 0] }) {
  const engine1 = useRef()
  const engine2 = useRef()
  const cockpit = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (engine1.current) engine1.current.intensity = 4 + Math.sin(t * 4) * 1.5
    if (engine2.current) engine2.current.intensity = 4 + Math.sin(t * 4 + 1) * 1.5
    if (cockpit.current) cockpit.current.emissiveIntensity = 0.6 + Math.sin(t * 2) * 0.3
  })

  const toon = (color, emissive = color) => (
    <meshToonMaterial color={color} emissive={emissive} emissiveIntensity={0.12} />
  )

  return (
    <group position={position}>
      {/* FUSELAJE CENTRAL */}
      <mesh>
        <boxGeometry args={[0.5, 0.22, 1.8]} />
        {toon('#7bafd4', '#4a8ab5')}
        <Outlines thickness={0.022} color="#000" />
      </mesh>

      {/* NARIZ */}
      <mesh position={[0, 0, -1.18]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.18, 0.65, 5]} />
        {toon('#5e9fc4', '#3a7aa0')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>

      {/* ALA IZQUIERDA */}
      <mesh position={[-0.78, -0.04, 0.2]}>
        <boxGeometry args={[1.05, 0.09, 0.9]} />
        {toon('#6895bf', '#426e9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <mesh position={[-1.2, -0.04, 0.55]} rotation={[0, 0.28, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.42]} />
        {toon('#4a7aaa')}
        <Outlines thickness={0.015} color="#000" />
      </mesh>

      {/* ALA DERECHA */}
      <mesh position={[0.78, -0.04, 0.2]}>
        <boxGeometry args={[1.05, 0.09, 0.9]} />
        {toon('#6895bf', '#426e9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <mesh position={[1.2, -0.04, 0.55]} rotation={[0, -0.28, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.42]} />
        {toon('#4a7aaa')}
        <Outlines thickness={0.015} color="#000" />
      </mesh>

      {/* COCKPIT */}
      <mesh position={[0, 0.16, -0.25]}>
        <boxGeometry args={[0.28, 0.18, 0.38]} />
        <meshToonMaterial
          ref={cockpit}
          color={P.cyan}
          emissive={P.cyan}
          emissiveIntensity={0.6}
          transparent
          opacity={0.82}
        />
        <Outlines thickness={0.018} color="#003344" />
      </mesh>

      {/* BLOQUE MOTORES */}
      <mesh position={[0, 0, 0.98]}>
        <boxGeometry args={[0.38, 0.22, 0.36]} />
        {toon('#3a6a9a')}
        <Outlines thickness={0.018} color="#000" />
      </mesh>

      {/* MOTOR IZQ */}
      <group position={[-0.55, -0.04, 0.88]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.13, 0.48, 7]} />
          {toon('#4a7aaa')}
          <Outlines thickness={0.015} color="#000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.025, 6, 24]} />
          <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={1} />
        </mesh>
        <pointLight ref={engine1} position={[0, 0, 0.3]} intensity={4} color={P.pink} distance={3} />
      </group>

      {/* MOTOR DER */}
      <group position={[0.55, -0.04, 0.88]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.13, 0.48, 7]} />
          {toon('#4a7aaa')}
          <Outlines thickness={0.015} color="#000" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.1, 0.025, 6, 24]} />
          <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={1} />
        </mesh>
        <pointLight ref={engine2} position={[0, 0, 0.3]} intensity={4} color={P.pink} distance={3} />
      </group>

      {/* CAÑONES */}
      {[-0.22, 0.22].map((x, i) => (
        <mesh key={i} position={[x, -0.1, -1.05]}>
          <cylinderGeometry args={[0.028, 0.028, 0.55, 6]} />
          <meshToonMaterial color="#c0d8e8" emissive={P.cyan} emissiveIntensity={0.2} />
          <Outlines thickness={0.012} color="#000" />
        </mesh>
      ))}

      {/* FRANJAS ROSAS */}
      <mesh position={[-0.78, 0.0, 0.05]}>
        <boxGeometry args={[0.95, 0.105, 0.08]} />
        <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.78, 0.0, 0.05]}>
        <boxGeometry args={[0.95, 0.105, 0.08]} />
        <meshToonMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

// ─── ESTELA PLASMA ───────────────────────────────────────────────────────────
function PlasmaTrail({ start, end, color, speed = 0.08 }) {
  const ref  = useRef()
  const prog = useRef(Math.random())
  const sv   = useMemo(() => new THREE.Vector3(...start), [])
  const ev   = useMemo(() => new THREE.Vector3(...end),   [])
  const pos  = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, dt) => {
    prog.current = (prog.current + dt * speed) % 1
    pos.lerpVectors(sv, ev, prog.current)
    if (ref.current) ref.current.position.copy(pos)
  })

  return (
    <Trail width={0.8} length={10} color={color} attenuation={t => t * t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}

// ─── ANILLOS HOLOGRÁFICOS ────────────────────────────────────────────────────
function HoloRings() {
  const r1 = useRef(), r2 = useRef(), r3 = useRef(), r4 = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime
    if (r1.current) r1.current.rotation.z = t * 0.35
    if (r2.current) r2.current.rotation.x = t * 0.22
    if (r3.current) r3.current.rotation.y = -t * 0.18
    if (r4.current) { r4.current.rotation.z = -t * 0.12; r4.current.rotation.x = t * 0.08 }
  })

  return (
    <group>
      <mesh ref={r1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.6, 0.022, 4, 140]} />
        <meshStandardMaterial color={P.cyan} emissive={P.cyan} emissiveIntensity={1.4} transparent opacity={0.7} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 2.8, 0.6, 0]}>
        <torusGeometry args={[5.8, 0.016, 4, 160]} />
        <meshStandardMaterial color={P.violet} emissive={P.violet} emissiveIntensity={1.2} transparent opacity={0.65} />
      </mesh>
      <mesh ref={r3} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.016, 4, 110]} />
        <meshStandardMaterial color={P.gold} emissive={P.gold} emissiveIntensity={1.0} transparent opacity={0.6} />
      </mesh>
      <mesh ref={r4} rotation={[Math.PI / 3.5, 0.9, 0.2]}>
        <torusGeometry args={[7.1, 0.010, 4, 200]} />
        <meshStandardMaterial color={P.pink} emissive={P.pink} emissiveIntensity={0.8} transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

// ─── PLATAFORMA ENERGÉTICA ───────────────────────────────────────────────────
function EnergyFloor() {
  const lineRef = useRef()

  useFrame((s) => {
    if (lineRef.current) lineRef.current.material.opacity = 0.22 + Math.sin(s.clock.elapsedTime * 0.8) * 0.08
  })

  const radialLines = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * 9, 0, Math.sin(angle) * 9),
      ]
      return new THREE.BufferGeometry().setFromPoints(points)
    })
  }, [])

  return (
    <group position={[0, -0.8, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[9.5, 64]} />
        <meshStandardMaterial color={P.cyan} transparent opacity={0.04} emissive={P.cyan} emissiveIntensity={0.6} />
      </mesh>

      {[
        { r: 2.8, color: P.cyan,   opacity: 0.55, emissive: 1.2 },
        { r: 5.2, color: P.violet, opacity: 0.45, emissive: 1.0 },
        { r: 8.0, color: P.gold,   opacity: 0.40, emissive: 0.9 },
      ].map((c, i) => (
        <mesh key={i} ref={i === 0 ? lineRef : undefined} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[c.r, 0.018, 4, 128]} />
          <meshStandardMaterial color={c.color} emissive={c.color} emissiveIntensity={c.emissive} transparent opacity={c.opacity} />
        </mesh>
      ))}

      {radialLines.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={P.cyan} transparent opacity={0.07} />
        </line>
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9.5, 0.03, 4, 180]} />
        <meshStandardMaterial color={P.cyan} emissive={P.cyan} emissiveIntensity={1.4} />
      </mesh>
    </group>
  )
}

// ─── PILAR DE ENERGÍA ────────────────────────────────────────────────────────
function EnergyPillar({ position, color, height = 4, delay = 0 }) {
  const crystalRef = useRef()
  const lightRef   = useRef()

  useFrame((s) => {
    const t = s.clock.elapsedTime + delay
    if (crystalRef.current) crystalRef.current.rotation.y = t * 1.5
    if (lightRef.current) lightRef.current.intensity = 3 + Math.sin(t * 3) * 1.5
  })

  return (
    <group position={position}>
      <mesh position={[0, height / 2 - 0.8, 0]}>
        <cylinderGeometry args={[0.035, 0.035, height, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.65} />
      </mesh>
      <mesh ref={crystalRef} position={[0, height - 0.8, 0]}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshToonMaterial color={color} emissive={color} emissiveIntensity={1.2} />
        <Outlines thickness={0.018} color="#000" />
      </mesh>
      <pointLight ref={lightRef} position={[0, height - 0.8, 0]} intensity={3} color={color} distance={5} />
    </group>
  )
}

// ─── CUBOS DE DATOS ORBITANDO ────────────────────────────────────────────────
function OrbitingData({ count = 16, radius = 7.2 }) {
  const groupRef = useRef()
  useFrame((s) => { if (groupRef.current) groupRef.current.rotation.y = s.clock.elapsedTime * 0.12 })

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const color = [P.cyan, P.violet, P.pink, P.gold][i % 4]
        const size  = 0.08 + (i % 3) * 0.04
        return (
          <Float key={i} speed={1.5 + i * 0.1} floatIntensity={0.3}>
            <mesh position={[Math.cos(angle) * radius, Math.sin(angle * 2.5) * 1.2, Math.sin(angle) * radius]}>
              <boxGeometry args={[size, size, size]} />
              <meshToonMaterial color={color} emissive={color} emissiveIntensity={0.8} />
              <Outlines thickness={0.02} color="#000" />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

// ─── PARTÍCULAS DE CAMPO ─────────────────────────────────────────────────────
function FieldParticles() {
  const ref = useRef()
  const geo = useMemo(() => {
    const pos = []
    for (let i = 0; i < 800; i++) {
      const r = 3 + Math.random() * 10
      const a = Math.random() * Math.PI * 2
      pos.push(Math.cos(a) * r, (Math.random() - 0.5) * 6, Math.sin(a) * r)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.05 })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.055} color={P.cyan} sizeAttenuation transparent opacity={0.45} />
    </points>
  )
}

// ─── ESCENA 3D ────────────────────────────────────────────────────────────────
function Scene() {
  const pilares = [
    { pos: [-5.5, -0.8, -3.5], color: P.cyan,   h: 5.2, d: 0   },
    { pos: [ 5.5, -0.8, -3.5], color: P.violet, h: 4.6, d: 1.2 },
    { pos: [-4.8, -0.8,  4.2], color: P.pink,   h: 3.8, d: 0.6 },
    { pos: [ 4.8, -0.8,  4.2], color: P.gold,   h: 4.4, d: 1.8 },
    { pos: [-7.0, -0.8,  0.5], color: P.lime,   h: 3.2, d: 0.9 },
    { pos: [ 7.0, -0.8,  0.5], color: P.cyan,   h: 3.6, d: 2.1 },
  ]
  const trails = [
    { start: [-18, 3, -12], end: [18, -1, 8],   color: P.cyan,   speed: 0.06 },
    { start: [15, 6, -10],  end: [-15, 0, 12],  color: P.pink,   speed: 0.045 },
    { start: [-10, -2, 15], end: [10, 4, -15],  color: P.violet, speed: 0.07 },
    { start: [8, 8, -18],   end: [-8, -3, 15],  color: P.gold,   speed: 0.05 },
  ]

  return (
    <>
      <color attach="background" args={[P.bg]} />
      <fog attach="fog" args={[P.bg, 25, 90]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <pointLight position={[0, 5, 4]}   intensity={8}  color={P.cyan}   />
      <pointLight position={[-4, 2, -3]} intensity={5}  color={P.violet} />
      <pointLight position={[4, 1.5, -3]} intensity={4} color={P.gold}  />

      <Stars radius={100} depth={60} count={7000} factor={5} saturation={0.3} fade speed={0.6} />
      <Sparkles count={400} scale={[14, 6, 14]} size={2.5} speed={0.3} opacity={0.45} color={P.cyan}   />
      <Sparkles count={120} scale={[10, 5, 10]} size={1.8} speed={0.2} opacity={0.4}  color={P.violet} />

      <Float speed={1.0} rotationIntensity={0.06} floatIntensity={0.3}>
        <MainShip position={[0, 0.2, 0]} />
      </Float>

      <HoloRings />
      <EnergyFloor />
      {pilares.map((p, i) => <EnergyPillar key={i} position={p.pos} color={p.color} height={p.h} delay={p.d} />)}
      <OrbitingData count={16} radius={7.2} />
      <FieldParticles />
      {trails.map((t, i) => <PlasmaTrail key={i} start={t.start} end={t.end} color={t.color} speed={t.speed} />)}

      <OrbitControls
        enableZoom enablePan enableRotate
        minDistance={3} maxDistance={30}
        autoRotate autoRotateSpeed={0.4}
      />

      <EffectComposer>
        <Bloom intensity={2.0} luminanceThreshold={0.08} luminanceSmoothing={0.85} />
        <ChromaticAberration offset={[0.0006, 0.0006]} />
        <Noise opacity={0.022} />
      </EffectComposer>
    </>
  )
}

// ─── HUD OVERLAY ──────────────────────────────────────────────────────────────
function HUD() {
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
              DON'T BE<br />THE SAME
            </motion.h1>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
              style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: P.gold, fontWeight: 700, letterSpacing: '0.18em', margin: '0.4rem 0 1.4rem', textShadow: `0 0 28px ${P.gold}88` }}
            >
              ★ BE COSMIC ★
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

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export default function HomeScene() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', background: P.bg }}>
      <Canvas camera={{ fov: 55, near: 0.1, far: 300, position: [10, 7, 11] }} gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <HUD />
    </div>
  )
}