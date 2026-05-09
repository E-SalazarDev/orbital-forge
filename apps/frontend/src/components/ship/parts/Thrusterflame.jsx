import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ThrusterFlame({
    position = [0, 0, 0],
    rotation = [0, 0, Math.PI / 2],  // default: apunta hacia +Z
    scale = 1,
    color1 = '#a0d8ff',
    color2 = '#ff6a00',
    intensity = 1,
}) {
    const coreRef      = useRef()
    const midRef       = useRef()
    const outerRef     = useRef()
    const glowRef      = useRef()
    const particlesRef = useRef()

    const { positions, speeds } = useMemo(() => {
        const COUNT = 60
        const pos   = new Float32Array(COUNT * 3)
        const spd   = []

        for (let i = 0; i < COUNT; i++) {
            pos[i * 3]     = (Math.random() - 0.5) * 0.18
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.18
            pos[i * 3 + 2] = Math.random() * 0.6

            spd.push({
                vx:   (Math.random() - 0.5) * 0.004,
                vy:   (Math.random() - 0.5) * 0.004,
                vz:   0.008 + Math.random() * 0.018,
                life: Math.random(),
            })
        }
        return { positions: pos, speeds: spd }
    }, [])

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()

        if (coreRef.current) {
            const p = 0.88 + Math.sin(t * 18) * 0.12
            coreRef.current.scale.set(p, p, 0.9 + Math.sin(t * 14) * 0.1)
            coreRef.current.material.opacity = 0.85 + Math.sin(t * 22) * 0.12
        }
        if (midRef.current) {
            const p = 0.92 + Math.sin(t * 11 + 1) * 0.08
            midRef.current.scale.set(p, p, 0.95 + Math.sin(t * 9) * 0.05)
            midRef.current.material.opacity = 0.55 + Math.sin(t * 13) * 0.1
        }
        if (outerRef.current) {
            const p = 0.95 + Math.sin(t * 6 + 2) * 0.05
            outerRef.current.scale.set(p, p, 0.98 + Math.sin(t * 7) * 0.04)
            outerRef.current.material.opacity = 0.22 + Math.sin(t * 8) * 0.07
        }
        if (glowRef.current) {
            const g = 0.9 + Math.sin(t * 7) * 0.1
            glowRef.current.scale.set(g, g, 1)
            glowRef.current.material.opacity = 0.18 + Math.sin(t * 5) * 0.06
        }
        if (particlesRef.current) {
            const pos = particlesRef.current.geometry.attributes.position
            for (let i = 0; i < speeds.length; i++) {
                const s = speeds[i]
                s.life += 0.016 * intensity
                if (s.life >= 1) {
                    pos.array[i * 3]     = (Math.random() - 0.5) * 0.14
                    pos.array[i * 3 + 1] = (Math.random() - 0.5) * 0.14
                    pos.array[i * 3 + 2] = 0
                    s.life = 0
                    s.vz   = 0.008 + Math.random() * 0.018
                } else {
                    pos.array[i * 3]     += s.vx
                    pos.array[i * 3 + 1] += s.vy
                    pos.array[i * 3 + 2] += s.vz * intensity
                }
            }
            pos.needsUpdate = true
        }
    })

    return (
        /* rotation viene como prop — Wing le pasa [Math.PI, 0, 0] para apuntar hacia -Z */
        <group position={position} rotation={rotation} scale={scale}>

            {/* Halo difuso */}
            <mesh ref={glowRef} position={[0, 0, 0.35]}>
                <coneGeometry args={[0.55, 1.4, 16, 1, true]} />
                <meshBasicMaterial
                    color={color2}
                    transparent opacity={0.18}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Corona exterior */}
            <mesh ref={outerRef} position={[0, 0, 0.28]}>
                <coneGeometry args={[0.38, 1.1, 12, 1, true]} />
                <meshBasicMaterial
                    color={color2}
                    transparent opacity={0.28}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Capa media */}
            <mesh ref={midRef} position={[0, 0, 0.18]}>
                <coneGeometry args={[0.22, 0.78, 10, 1, true]} />
                <meshBasicMaterial
                    color="#ffb347"
                    transparent opacity={0.55}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Núcleo */}
            <mesh ref={coreRef} position={[0, 0, 0.08]}>
                <coneGeometry args={[0.10, 0.45, 8, 1, true]} />
                <meshBasicMaterial
                    color={color1}
                    transparent opacity={0.90}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Disco en la boca */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.18, 16]} />
                <meshBasicMaterial
                    color={color1}
                    transparent opacity={0.75}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Partículas */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color={color2}
                    size={0.04}
                    transparent opacity={0.7}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    sizeAttenuation
                />
            </points>

        </group>
    )
}