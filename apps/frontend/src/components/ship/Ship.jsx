import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { RoundedBox } from '@react-three/drei'
import { RoundedBoxGeometry } from 'three-stdlib'
import Wing from './parts/Wing'
import InstallPart from './slots/InstallPart'
import * as THREE from 'three'

export default function Ship() {
    return (
        <group
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
        >
            <group rotation={[0, Math.PI / 2, 0]}>

                {/* ══════════════════════════════════════
                    CUERPO PRINCIPAL — base mejorada
                ══════════════════════════════════════ */}
                <mesh>
                    <Geometry>

                        {/* Base principal */}
                        <Base>
                            <boxGeometry args={[5, 0.4, 2]} />
                        </Base>

                        {/* Ensanchamiento central — da volumen al fuselaje */}
                        <Addition position={[0, 0, 0]}>
                            <boxGeometry args={[2.5, 0.20, 2.5]} />
                        </Addition>

                        {/* Quilla inferior — nervio central bajo la nave */}
                        <Addition position={[0.5, -0.28, 0]}>
                            <boxGeometry args={[4.0, 0.18, 0.45]} />
                        </Addition>

                        {/* Hombros laterales delanteros */}
                        <Addition position={[-0.7, 0.1, 0.9]}>
                            <boxGeometry args={[3.2, 0.5, 0.40]} />
                        </Addition>

                        <Addition position={[-0.7, 0.1, -0.9]}>
                            <boxGeometry args={[3.2, 0.5, 0.40]} />
                        </Addition>

                        {/* Escalón trasero — transición hacia los motores */}
                        {/* <Addition position={[2.0, -0.05, 0]}>
                            <boxGeometry args={[1.8, 0.28, 1.6]} />
                        </Addition> */}

                        {/* Corte en punta de proa */}
                        <Subtraction position={[2.6, 0, 0]}>
                            <sphereGeometry args={[0.9, 7, 4]} />
                        </Subtraction>

                        {/* Cortes laterales traseros — silueta más agresiva */}
                        <Subtraction position={[2.8, 0, 1.15]} rotation={[0, 0.35, 0]}>
                            <boxGeometry args={[1.0, 1, 0.8]} />
                        </Subtraction>
                        <Subtraction position={[2.8, 0, -1.15]} rotation={[0, -0.35, 0]}>
                            <boxGeometry args={[1.0, 1, 0.8]} />
                        </Subtraction>

                    </Geometry>

                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.75}
                        roughness={0.35}
                        clearcoat={0.6}
                        clearcoatRoughness={0.25}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                    />
                </mesh>

                {/* ══════════════════════════════════════
                    COCKPIT 
                ══════════════════════════════════════ */}
                <mesh position={[0.8, 0.4, 0]}>
                    <cylinderGeometry args={[0.5, 1, 0.6, 6]} />
                    <meshPhysicalMaterial
                        color="#0a1628"             // un poco más azul-profundo que el original
                        metalness={0.0}             // sin metal — el cristal no es metálico
                        roughness={0.08}            // igual que antes, superficie lisa
                        transmission={0}            // CERO transmisión — no deja pasar luz ni muestra interior
                        transparent={false}         // opaco total
                        opacity={1}
                        clearcoat={0.4}             // clearcoat reducido — brillo sutil, no espejo
                        clearcoatRoughness={0.2}    // un poco de textura en el barniz, más natural
                        reflectivity={0.3}          // reflejo contenido, no agresivo
                        envMapIntensity={1.0}       // entorno presente pero discreto
                        sheen={0.6}
                        sheenColor="#60a5fa"        // igual que el original
                        sheenRoughness={0.4}
                        emissive="#0b1a30"
                        emissiveIntensity={0.18}    // un poco más de profundidad interior azulada
                        ior={1.5}                   // índice de refracción del vidrio común
                        specularIntensity={0.6}     // brillo especular moderado
                        specularColor="#bfdbfe"     // azul muy pálido en los puntos de luz
                    />
                </mesh>

                <mesh position={[-0.1, 0.4, 0]}>
                    <boxGeometry args={[1.8, 0.7, 1.7]} />
                    <meshStandardMaterial color="red" />
                </mesh>

                {/* ══════════════════════════════════════
                    ALERONES REDISEÑADOS
                    3 segmentos por lado:
                    raíz → panel principal → borde de salida
                    Inclinados hacia abajo y barridos hacia atrás
                ══════════════════════════════════════ */}

                {/* ── ALERÓN DERECHO ── */}

                {/* Conexión ala */}
                <mesh position={[0.5, -0.04, 1.22]} rotation={[1.8, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    {/* <boxGeometry args={[1.3, 0.13, 3.52]} /> */}
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.75}
                        roughness={0.35}
                        clearcoat={0.6}
                        clearcoatRoughness={0.25}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                    />
                </mesh>

                {/* 2. Panel principal — superficie grande, dihedral negativo + barrido */}
                <mesh position={[0.3, -0.24, 2.22]} rotation={[-1, 3.2, 3.1]}>
                    <boxGeometry args={[3.9, 0.08, 0.6]} />
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.78}
                        roughness={0.30}
                        clearcoat={0.7}
                        clearcoatRoughness={0.2}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                    />
                </mesh>

                {/* 3. Borde de salida — lamina fina, más inclinada */}
                <mesh position={[0.5, -0.1, 1.70]} rotation={[-1, 3.2, 3.1]}>
                    <boxGeometry args={[2.7, 0.045, 0.52]} />
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.82}
                        roughness={0.22}
                        clearcoat={0.9}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.04}
                    />
                </mesh>

                {/* ── ALERÓN IZQUIERDO ( ── */}
                {/* triangulo */}
                <mesh
                    position={[-2, 0.3, -1.22]}
                    rotation={[THREE.MathUtils.degToRad(30), 1.9, 0]}
                    scale={[1, 0.52, 1]}
                >
                    <cylinderGeometry args={[0.80, 0.85, 0.13, 3]} />

                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.75}
                        roughness={0.35}
                        clearcoat={0.6}
                        clearcoatRoughness={0.25}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                        side={THREE.DoubleSide}
                    />
                </mesh>

        {/* ── ALERÓN IZQUIERDO (espejo del derecho, Z negado) ── */}

                {/* Conexión ala */}
                <mesh position={[0.5, -0.04, -1.22]} rotation={[-1.8, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.75}
                        roughness={0.35}
                        clearcoat={0.6}
                        clearcoatRoughness={0.25}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                    />
                </mesh>

                {/* 2. Panel principal */}
                <mesh position={[0.3, -0.24, -2.22]} rotation={[1, 3.2, 3.1]}>
                    <boxGeometry args={[3.9, 0.08, 0.6]} />
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.78}
                        roughness={0.30}
                        clearcoat={0.7}
                        clearcoatRoughness={0.2}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.05}
                    />
                </mesh>

                {/* 3. Borde de salida */}
                <mesh position={[0.5, -0.1, -1.70]} rotation={[1, 3.2, 3.1]}>
                    <boxGeometry args={[2.7, 0.045, 0.52]} />
                    <meshPhysicalMaterial
                        color="#1e3f6e"
                        metalness={0.82}
                        roughness={0.22}
                        clearcoat={0.9}
                        envMapIntensity={2.5}
                        emissive="#0a1a30"
                        emissiveIntensity={0.04}
                    />
                </mesh>

                {/* ══════════════════════════════════════
                    TURBINAS
                ══════════════════════════════════════ */}
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