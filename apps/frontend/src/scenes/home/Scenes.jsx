
import { PerspectiveCamera, OrbitControls, Sparkles, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import Ship from '../../components/ship/Ship';
export default function HomeScene({ children }) {
  // nombre del componente debe estar en camelCase boxGeometry


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
        {/* <color attach="background" args={['#020617']} /> */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 5]} intensity={3} />
        <pointLight position={[0, 3, 4]} intensity={4} color="#22d3ee" />
        {/* <pointLight position={[-3, 2, 3]} intensity={3} color="#facc15" /> */}
        <Ship />
        
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
            25, //tamaño grid 
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
        <EffectComposer>
          <Bloom intensity={1.8} luminanceThreshold={0.01} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

