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
                        color="skyblue"
                        metalness={0}      // El cristal no es metal
                        roughness={0}      // Totalmente liso
                        transmission={8}   // ¡Esto lo hace cristal!
                        // transmission={1}   // ¡Esto lo hace cristal!
                        thickness={0.5}    // Grosor del vidrio
                        transparent={true}
                        opacity={0.9}      // Un poco de opacidad para que el color se note
                        envMapIntensity={1} // Para que brille con el entorno
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