import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import HUD from '../../components/hud/HUD'
import { P } from '../../lib/palette'

export default function HomeScene() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: P.bg,
      }}
    >
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 300, position: [10, 7, 11] }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>

      <HUD />
    </div>
  )
}