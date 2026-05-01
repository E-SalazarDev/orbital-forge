import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'


// <sphereGeometry args={[4, 7, 9]} /> esfera // <torusGeometry args={[5, 0.3, 9, 100]} /> aro
// rotation={[Math.PI / 2, 0, 0]}


export default function Ship() {
    return (
        <group
            position={[0, 0, 0]}      // mueve toda la nave
            rotation={[0, 0, 0]}  // inclinar / diagonal
            scale={1}                 // tamaño general
        >

            {/* CUERPO PRINCIPAL*/}
            <mesh>
                <Geometry>

                    {/* Base */}
                    <Base>
                        <boxGeometry args={[10, 3, 3]} />
                        {/* <meshStandardMaterial color="#444444" /> */}
                    </Base>

                    
                    {/* Parte extra arriba (amarillo) */}
                    <Addition  position={[4, 0, 0]}>
                        <sphereGeometry  args={[2.4, 64, 64]} />
                      
                    </Addition>

                    <Addition  position={[-5, 0, 0]}>
                     <boxGeometry args={[3, 3, 16]}  />
                     {/* <meshStandardMaterial color="blue" /> */}
                    </Addition>

                    {/* Agujero con cilindro */}
                    {/* <Subtraction position={[0, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
          </Subtraction> */}
                </Geometry>

              
                <meshStandardMaterial color="green" />
            </mesh>


            {/* Debugs */}

            {/* <mesh position={[5, 0, 0]}>
                <sphereGeometry args={[2, 17, 9]} />
                <meshStandardMaterial color="yellow" wireframe />
            </mesh>

          
            <mesh >
                <boxGeometry args={[10, 3, 3]} />
                <meshStandardMaterial color="red" wireframe />
            </mesh>

            <mesh position={[-5, 0, 0]}>
                
                <boxGeometry args={[3, 3, 16]} />
                <meshStandardMaterial color="blue" wireframe />
            </mesh> */}


        </group>
    )
}