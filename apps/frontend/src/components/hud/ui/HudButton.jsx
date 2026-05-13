import { P } from '../../../lib/palette'

export default function HudButton({ children, variant = 'primary' }) {
  const isPrimary = variant === 'primary'

  return (
    <button
      className={`hud-button ${isPrimary ? 'hud-button-primary' : 'hud-button-secondary'}`}
      style={
        isPrimary
          ? {
              background: `linear-gradient(135deg, ${P.violet}, ${P.pink})`,
              boxShadow: `0 0 32px ${P.violet}55`,
            }
          : {
              border: `1px solid ${P.cyan}88`,
              color: P.cyan,
            }
      }
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.transform = 'scale(1.04)'
          e.currentTarget.style.boxShadow = `0 0 48px ${P.violet}88`
        } else {
          e.currentTarget.style.background = `${P.cyan}15`
          e.currentTarget.style.borderColor = P.cyan
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = `0 0 32px ${P.violet}55`
        } else {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = `${P.cyan}88`
        }
      }}
    >
      {children}
    </button>
  )
}