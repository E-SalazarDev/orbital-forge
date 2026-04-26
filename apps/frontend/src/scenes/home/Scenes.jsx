
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
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

        {/* <PerspectiveCamera makeDefault position={[0, 0, 3]} /> */}

        <Stars
          radius={100} //radio de distribución
          depth={50}    // profundidad de distribución, más alto hace que se extienda más lejos desde el centro 
          count={4000}  // num de estrellas generadas
          factor={7}   // tamaño y brillo de cada estrela 
          saturation={0} //color de estrellas añade más color
          fade           // cuando se tiene desvanece los bordes 
          speed={1.6}    //regula la velocidad de pulso
        />

        <OrbitControls 
        enableZoom={false}
        // autoRotate  
        />


      </Canvas>
    </div>
  )
}