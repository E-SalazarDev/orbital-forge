import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
export default function Shapes({}) {
    
    return(
         <>
           <Canvas>
             <mesh>
          <meshBasicMaterial color="red" wireframe />

        </mesh>

        <mesh>
          <sphereGeometry args={[4, 7, 9]} />
          <meshBasicMaterial
            color="blue" wireframe
          />

        </mesh>


        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[5, 0.3, 9, 100]} />
          <meshBasicMaterial
            color="red" wireframe
          />

        </mesh>

        <Sparkles
          count={450}
          scale={[7, 5, 4]}
          size={3}
          speed={0}
          color="#facc15"
          noise={0}
        />
           </Canvas>
         </>
    )
}