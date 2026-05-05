import { Float, OrbitControls } from '@react-three/drei'
import { P } from '../../lib/palette'

import Lights from '../../components/core/Lights'
import Environment from '../../components/core/Environment'
import PostProcessing from '../../components/effects/PostProcessing'

import MainShip from '../../components/space/MainShip'
import HoloRings from '../../components/space/HoloRings'
import EnergyFloor from '../../components/space/EnergyFloor'
import EnergyPillar from '../../components/space/EnergyPillar'
import OrbitingData from '../../components/space/OrbitingData'
import FieldParticles from '../../components/space/FieldParticles'
import PlasmaTrail from '../../components/space/PlasmaTrail'

export default function Scene() {
  const pilares = [
    { pos: [-5.5, -0.8, -3.5], color: P.cyan, h: 5.2, d: 0 },
    { pos: [5.5, -0.8, -3.5], color: P.violet, h: 4.6, d: 1.2 },
    { pos: [-4.8, -0.8, 4.2], color: P.pink, h: 3.8, d: 0.6 },
    { pos: [4.8, -0.8, 4.2], color: P.gold, h: 4.4, d: 1.8 },
    { pos: [-7.0, -0.8, 0.5], color: P.lime, h: 3.2, d: 0.9 },
    { pos: [7.0, -0.8, 0.5], color: P.cyan, h: 3.6, d: 2.1 },
  ]

  const trails = [
    { start: [-18, 3, -12], end: [18, -1, 8], color: P.cyan, speed: 0.06 },
    { start: [15, 6, -10], end: [-15, 0, 12], color: P.pink, speed: 0.045 },
    { start: [-10, -2, 15], end: [10, 4, -15], color: P.violet, speed: 0.07 },
    { start: [8, 8, -18], end: [-8, -3, 15], color: P.gold, speed: 0.05 },
  ]

  return (
    <>
      <Environment />
      <Lights />

      <Float speed={1.0} rotationIntensity={0.06} floatIntensity={0.3}>
        <MainShip position={[0, 0.2, 0]} />
      </Float>

      <HoloRings />
      <EnergyFloor />

      {pilares.map((p, i) => (
        <EnergyPillar key={i} position={p.pos} color={p.color} height={p.h} delay={p.d} />
      ))}

      <OrbitingData count={16} radius={7.2} />
      <FieldParticles />

      {trails.map((t, i) => (
        <PlasmaTrail key={i} start={t.start} end={t.end} color={t.color} speed={t.speed} />
      ))}

      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        minDistance={3}
        maxDistance={30}
        autoRotate
        autoRotateSpeed={0.4}
      />

      <PostProcessing />
    </>
  )
}