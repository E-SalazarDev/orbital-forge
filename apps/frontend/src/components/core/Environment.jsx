import { Stars, Sparkles } from '@react-three/drei'
import { P } from '../../lib/palette'

export default function Environment() {
  return (
    <>
      <color attach="background" args={[P.bg]} />
      <fog attach="fog" args={[P.bg, 25, 90]} />

      <Stars radius={100} depth={60} count={7000} factor={5} saturation={0.3} fade speed={0.6} />
      <Sparkles count={400} scale={[14, 6, 14]} size={2.5} speed={0.3} opacity={0.45} color={P.cyan} />
      <Sparkles count={120} scale={[10, 5, 10]} size={1.8} speed={0.2} opacity={0.4} color={P.violet} />
    </>
  )
}