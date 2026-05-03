export const shipSlots = {
  wingOuter: {
    position: [0, 0.1, 4.6],
    rotation: [0, Math.PI / 2, 0],
    scale: 0.78,
    mirrorAxis: 'z',
    allowed: ['turbine', 'cannon'],
  },

  wingInner: {
    position: [0, 0.1, 3.4],
    rotation: [0, Math.PI / 2, 0],
    scale: 0.65,
    mirrorAxis: 'z',
    allowed: ['cannon', 'light'],
  },
}