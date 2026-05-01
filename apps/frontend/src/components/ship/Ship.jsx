import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { RoundedBox } from '@react-three/drei'
import { RoundedBoxGeometry } from 'three-stdlib'

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
                        <boxGeometry args={[13, 1.6, 6]} />
                    </Base>


                    {/* Parte extra arriba (amarillo) */}
                    <mesh position={[-1, 1.2, 0]} >
                        {/* args: [radioSuperior, radioInferior, altura, segmentosRadiales] */}

                        <cylinderGeometry args={[2, 3, 1.5, 6]} />
                        <meshPhysicalMaterial
                            color="skyblue"
                            metalness={0}      // El cristal no es metal
                            roughness={0}      // Totalmente liso
                            transmission={1}   // ¡Esto lo hace cristal!
                            thickness={0.5}    // Grosor del vidrio
                            transparent={true}
                            opacity={0.7}      // Un poco de opacidad para que el color se note
                            envMapIntensity={1} // Para que brille con el entorno
                        />
                    </mesh>

                    <Addition position={[-4, 1, 0]}>
                        <primitive
                            object={new RoundedBoxGeometry(6, 2, 6, 4, 0.3)}
                            // new RoundedBoxGeometry(width, height, depth, segments, radius)
                        />
                        <meshStandardMaterial color="black" />
                    </Addition>

              

                    <RoundedBox
                        position={[-7, 0.1, 0]}
                        args={[4, 0.5, 22]}   // mismo tamaño
                        radius={0.2}          // qué tan redondeado
                        smoothness={4}        // qué tan suave
                    >
                        <meshStandardMaterial color="blue" />
                    </RoundedBox>
                </Geometry>


                <meshStandardMaterial color="green" />
            </mesh>


        </group>
    )
}

