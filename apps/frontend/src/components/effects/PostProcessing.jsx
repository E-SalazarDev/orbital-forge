import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom intensity={2.0} luminanceThreshold={0.08} luminanceSmoothing={0.85} />
      <ChromaticAberration offset={[0.0006, 0.0006]} />
      <Noise opacity={0.022} />
    </EffectComposer>
  )
}