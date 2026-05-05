import { P } from '../../lib/palette'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <pointLight position={[0, 5, 4]} intensity={8} color={P.cyan} />
      <pointLight position={[-4, 2, -3]} intensity={5} color={P.violet} />
      <pointLight position={[4, 1.5, -3]} intensity={4} color={P.gold} />
    </>
  )
}