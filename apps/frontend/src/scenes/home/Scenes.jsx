
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
        {/* <color attach="background" args={['#100000']} /> */}

        {/* <ambientLight intensity={10} /> */}
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

        <gridHelper
          args={[
            10, //tamaño grid 
            10,  // num divisiones que divide cada lado del grid
            0x444444, //color lineas x y 
            0x888888  //color de las demas líneas
          ]} />


        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={2}
        //  maxDistance={40}
        // autoRotate  
        />


      </Canvas>
    </div>
  )
}

