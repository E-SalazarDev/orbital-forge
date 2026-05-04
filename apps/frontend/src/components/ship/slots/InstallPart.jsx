import { shipSlots } from './shipSlots'

export default function InstallPart({
  component: Component,
  type,
  slot,
  mirror = false,
}) {
  const config = shipSlots[slot]

  if (!config) return null

  if (!config.allowed.includes(type)) return null

  const firstPart = (
    <Component
      key={`${slot}-main`}
      position={config.position}
      rotation={config.rotation}
      scale={config.scale}
    />
  )

  if (!mirror || config.mirrorAxis !== 'z') {
    return firstPart
  }

  const mirrorPosition = [
    config.position[0],
    config.position[1],
    -config.position[2],
  ]

  
  const mirrorRotation = config.rotation

  return (
    <>
      {firstPart}

      <Component
        key={`${slot}-mirror`}
        position={mirrorPosition}
        rotation={mirrorRotation}
        scale={config.scale}
      />
    </>
  )
}