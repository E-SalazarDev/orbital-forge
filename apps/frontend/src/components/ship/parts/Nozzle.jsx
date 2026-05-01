export default function Nozzle({ }) {

    return (

        <>
            <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[5, 0.3, 9, 100]} />
                <meshStandardMaterial color="skyblue" />
            </mesh>
        </>)
}