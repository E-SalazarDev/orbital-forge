
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'

export default function HomeScene({children}) {



    return(
        
             <Canvas
               camera={{
                   fov: 30,
                  near: 0.1,
                  far: 200,
                  position: [0,0,100]
               }}
             >

                
             </Canvas>
    )
}