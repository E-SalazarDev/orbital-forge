
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
export default function HomeScene({ children }) {



  return (
    <div className='w-full h-screen'>

      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, 10]
        }}
      >

       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


      </Canvas>
    </div>
  )
}