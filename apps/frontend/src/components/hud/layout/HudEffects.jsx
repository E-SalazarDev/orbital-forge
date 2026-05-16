export default function HudEffects() {
  return (
    <>
      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(34,211,238,0.008)_2px,rgba(34,211,238,0.008)_4px)]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(4,2,15,0.75)_100%)]
        "
      />
    </>
  )
}