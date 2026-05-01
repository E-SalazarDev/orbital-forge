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
                        <boxGeometry args={[13, 2.6, 6]} />
                    </Base>


                    {/* Parte extra arriba (amarillo) */}
                    <mesh position={[-1, 1.8, 0]} >
                        {/* args: [radioSuperior, radioInferior, altura, segmentosRadiales] */}
                        {/* <cylinderGeometry args={[1, 3, 2, 4]} /> */}
                        <cylinderGeometry args={[2, 3, 1.5, 6]} />
                        <meshStandardMaterial
                            color="yellow"
                        //   metalness={0}
                        //   roughness={0.1}
                        />
                    </mesh>

                    <Addition position={[-4, 1.5, 0]} >
                       
                        <boxGeometry args={[6, 2, 6]} />
                        <meshStandardMaterial
                            color="black"  
                        />
                    </Addition>

                    <mesh position={[0, 0, 0]} >
                       
                        <boxGeometry args={[6, 2, 12]} />
                        <meshStandardMaterial
                            color="black"  
                        />
                    </mesh>

                    <mesh position={[-8, 0.5, 0]}>
                        <boxGeometry args={[3, 3, 16]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>


                </Geometry>


                <meshStandardMaterial color="green" />
            </mesh>


        </group>
    )
}

