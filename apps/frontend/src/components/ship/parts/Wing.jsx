import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'

export default function Wing({ }) {


    return (
        <group
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
        >
            <mesh>
                <Geometry>
                    <Base>
                        <boxGeometry args={[3.1, 0.2, 2]} />
                    </Base>

                    <Addition rotation={[Math.PI / 2, 1, 0]} position={[0, 0, 0.3]} >
                        {/* <cylinderGeometry args={[1, 2, 3, 6]} /> */}
                        <cylinderGeometry args={[0.8, 1.5, 3, 64]} />
                        <meshStandardMaterial color="green" />
                    </Addition>



                    <Subtraction position={[0, 0, -0.9]} >
                        {/* <torusGeometry args={[2, 0.4, 64, 64]} /> */}
                        <torusGeometry args={[1.4, 0.2, 64, 64]} />
                        {/* <torusGeometry args={[2, 0.3, 64, 6]} /> */}
                        <meshStandardMaterial color="skyblue" />
                    </Subtraction>

                    <Subtraction position={[0, 0, 0]} >
                        {/* <torusGeometry args={[2, 0.4, 64, 64]} /> */}
                        <torusGeometry args={[1.4, 0.2, 64, 64]} />
                        {/* <torusGeometry args={[2, 0.3, 64, 6]} /> */}
                        <meshStandardMaterial color="skyblue" />
                    </Subtraction>



                    <Subtraction position={[0, 0, 1]} >
                        {/* <torusGeometry args={[2, 0.4, 64, 64]} /> */}
                        <torusGeometry args={[1.3, 0.4, 64, 64]} />
                        {/* <torusGeometry args={[2, 0.3, 64, 6]} /> */}
                        <meshStandardMaterial color="skyblue" />
                    </Subtraction>


                    <Subtraction position={[0, 0, -1]}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshStandardMaterial color="yellow" />
                    </Subtraction>
                </Geometry>
                <meshStandardMaterial
                    color="#ef233c"
                    metalness={0.35}
                    roughness={0.45}
                />


            </mesh>
        </group>
    )
}