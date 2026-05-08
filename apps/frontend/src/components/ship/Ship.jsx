import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { RoundedBox } from '@react-three/drei'
import { RoundedBoxGeometry } from 'three-stdlib'
import Wing from './parts/Wing'
import InstallPart from './slots/InstallPart'
// <sphereGeometry args={[4, 7, 9]} /> esfera // <torusGeometry args={[5, 0.3, 9, 100]} /> aro
// rotation={[Math.PI / 2, 0, 0]}

export default function Ship() {
    return (
        <group
            position={[0, 0, 0]}      // mueve toda la nave
            rotation={[0, 0, 0]}  // inclinar / diagonal
            scale={1}                 // tamaño general
        >
            {/* 
                CORRECCIÓN:
                La nave estaba construida a lo largo del eje X.
                Este grupo la gira para que el largo quede en dirección Z.
                Si queda al revés, cambia Math.PI / 2 por -Math.PI / 2.
            */}
            <group rotation={[0, Math.PI / 2, 0]}>

                {/* CUERPO PRINCIPAL*/}
                <mesh>
                    <Geometry>

                        {/* Base cuerpo */}
                        <Base>
                            <boxGeometry args={[4, 0.5, 2]} />

                        </Base>

                    </Geometry>

                    <meshStandardMaterial color="green" />
                </mesh>

                {/* Parte extra arriba*/}
                <mesh position={[1, 0.6, 0]} >
                    {/* args: [radioSuperior, radioInferior, altura, segmentosRadiales] */}

                    <cylinderGeometry args={[0.5, 1, 0.5, 6]} />
                     <meshPhysicalMaterial
                        color="#0f172a"
                        // color="#071a12"  
                        metalness={0.15}
                        roughness={0.08}

                        transmission={0}         
                        transparent={true}
                        opacity={1}

                        clearcoat={1}           
                        clearcoatRoughness={0.05}

                        reflectivity={1}
                        envMapIntensity={2.5}

                        sheen={1}
                        sheenColor="#60a5fa"
                        // sheenColor="#39ff88"

                        emissive="#0b1220"
                        //  emissive="#22c55e"      /
                        emissiveIntensity={0.08}
                    />
                </mesh>

                <mesh position={[0.1, 0.1, 0]}>
                    <boxGeometry args={[0.6, 0.1, 8]} />
                    <meshStandardMaterial color="blue" />
                </mesh>



                {/* TURBINAS */}
                {/* <Wing position={[0, 0.1, 4.6]} rotation={[0, Math.PI / 2, 0]} scale={0.78} /> */}
                <InstallPart
                    component={Wing}
                    type="turbine"
                    slot="wingOuter"
                    mirror={true}
                />

            </group>
        </group>
    )
}