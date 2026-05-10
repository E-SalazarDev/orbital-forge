import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import Wing from './parts/Wing'
import InstallPart from './slots/InstallPart'
import * as THREE from 'three'

const MAT = {
    body: {
        color: "#F2EFE8",
        metalness: 0.30,
        roughness: 0.32,
        clearcoat: 0.90,
        clearcoatRoughness: 0.10,
        envMapIntensity: 2.5,
        emissive: "#A09880",
        emissiveIntensity: 0.02,
    },
    shoulder: {
        color: "#DDD8CC",
        metalness: 0.25,
        roughness: 0.38,
        clearcoat: 0.60,
        clearcoatRoughness: 0.15,
        envMapIntensity: 2.0,
        emissive: "#887060",
        emissiveIntensity: 0.015,
    },
    wingMain: {
        color: "#E87820",
        metalness: 0.55,
        roughness: 0.25,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        envMapIntensity: 3.0,
        emissive: "#CC5500",
        emissiveIntensity: 0.06,
    },
    wingEdge: {
        color: "#F0A040",
        metalness: 0.60,
        roughness: 0.18,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        envMapIntensity: 3.5,
        emissive: "#CC5500",
        emissiveIntensity: 0.04,
    },
    wingJoint: {
        color: "#5AAAC8",
        metalness: 0.65,
        roughness: 0.30,
        clearcoat: 0.70,
        clearcoatRoughness: 0.12,
        envMapIntensity: 2.5,
        emissive: "#1A4A70",
        emissiveIntensity: 0.03,
    },
    panelBlue: {
        color: "#3A82A8",
        metalness: 0.50,
        roughness: 0.28,
        clearcoat: 0.80,
        clearcoatRoughness: 0.12,
        envMapIntensity: 2.5,
        emissive: "#102840",
        emissiveIntensity: 0.03,
    },
    cockpitDome: {
        color: "#28A840",
        metalness: 0.0,
        roughness: 0.05,
        transmission: 0.35,
        transparent: true,
        opacity: 0.93,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        sheen: 1.0,
        sheenColor: "#50D870",
        sheenRoughness: 0.12,
        emissive: "#28A840",
        emissiveIntensity: 0.15,
        ior: 1.55,
        specularIntensity: 0.8,
        specularColor: "#A0FFB8",
    },
    cockpitBase: {
        color: "#DDD8CC",
        metalness: 0.35,
        roughness: 0.35,
        clearcoat: 0.50,
        envMapIntensity: 1.8,
        emissive: "#605850",
        emissiveIntensity: 0.02,
    },
    frame: {
        color: "#606060",
        metalness: 0.80,
        roughness: 0.45,
        clearcoat: 0.30,
        envMapIntensity: 1.5,
        emissive: "#202020",
        emissiveIntensity: 0.02,
    },
    wingTriangle: {
        color: "#E87820",
        metalness: 0.55,
        roughness: 0.28,
        clearcoat: 0.90,
        clearcoatRoughness: 0.10,
        envMapIntensity: 2.8,
        emissive: "#993300",
        emissiveIntensity: 0.05,
        side: THREE.DoubleSide,
    },
    turbineConnector: {
        color: "#3A2050",
        metalness: 0.88,
        roughness: 0.22,
        clearcoat: 0.90,
        clearcoatRoughness: 0.08,
        envMapIntensity: 3.0,
        emissive: "#5010C0",
        emissiveIntensity: 0.18,
        iridescence: 0.4,
        iridescenceIOR: 1.8,
        iridescenceThicknessRange: [80, 300],
    },
    // ── Materiales extra para las opciones de cola ──────────────
    tailFin: {
        color: "#CC5C10",
        metalness: 0.65,
        roughness: 0.22,
        clearcoat: 1.0,
        clearcoatRoughness: 0.07,
        envMapIntensity: 3.0,
        emissive: "#882200",
        emissiveIntensity: 0.08,
    },
    exhaustPlate: {
        color: "#2E3035",
        metalness: 0.90,
        roughness: 0.20,
        clearcoat: 0.80,
        clearcoatRoughness: 0.10,
        envMapIntensity: 2.5,
        emissive: "#3A0860",
        emissiveIntensity: 0.12,
    },
    exhaustGlow: {
        color: "#0A0010",
        metalness: 0.0,
        roughness: 0.8,
        emissive: "#8B20FF",
        emissiveIntensity: 1.8,
        transparent: true,
        opacity: 0.85,
        toneMapped: false,
    },
    podBlue: {
        color: "#3A82A8",
        metalness: 0.70,
        roughness: 0.22,
        clearcoat: 0.90,
        clearcoatRoughness: 0.08,
        envMapIntensity: 3.0,
        emissive: "#102840",
        emissiveIntensity: 0.05,
    },
    rearPanel: {
        color: "#1E2A3A",
        metalness: 0.85,
        roughness: 0.25,
        clearcoat: 0.70,
        envMapIntensity: 2.5,
        emissive: "#0A1020",
        emissiveIntensity: 0.04,
    },
}

export default function Ship() {
    return (
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
            <group rotation={[0, Math.PI / 2, 0]}>

                {/* ══════════════════════════════════════
                    CUERPO PRINCIPAL
                ══════════════════════════════════════ */}
                <mesh>
                    <Geometry>
                        <Base>
                            <boxGeometry args={[5, 0.4, 2]} />
                        </Base>
                        <Addition position={[0, 0, 0]}>
                            <boxGeometry args={[2.5, 0.20, 2.5]} />
                        </Addition>
                        <Addition position={[0.5, -0.28, 0]}>
                            <boxGeometry args={[4.0, 0.18, 0.45]} />
                        </Addition>
                        <Addition position={[-0.7, 0.1, 0.9]}>
                            <boxGeometry args={[3.2, 0.5, 0.40]} />
                        </Addition>
                        <Addition position={[-0.7, 0.1, -0.9]}>
                            <boxGeometry args={[3.2, 0.5, 0.40]} />
                        </Addition>
                        <Subtraction position={[2.6, 0, 0]}>
                            <sphereGeometry args={[0.9, 7, 4]} />
                        </Subtraction>
                        <Subtraction position={[2.8, 0, 1.15]} rotation={[0, 0.35, 0]}>
                            <boxGeometry args={[1.0, 1, 0.8]} />
                        </Subtraction>
                        <Subtraction position={[2.8, 0, -1.15]} rotation={[0, -0.35, 0]}>
                            <boxGeometry args={[1.0, 1, 0.8]} />
                        </Subtraction>
                    </Geometry>
                    <meshPhysicalMaterial {...MAT.body} />
                </mesh>

                {/* ══════════════════════════════════════
                    COCKPIT
                ══════════════════════════════════════ */}
                <mesh position={[0.8, 0.4, 0]}>
                    <cylinderGeometry args={[0.5, 1, 0.6, 6]} />
                    <meshPhysicalMaterial {...MAT.cockpitDome} />
                </mesh>
                <mesh position={[-0.36, 0.4, 0]}>
                    <boxGeometry args={[2.6, 0.7, 1.7]} />
                    <meshPhysicalMaterial {...MAT.cockpitBase} />
                </mesh>
                <mesh position={[-0.4, 0.76, 0]}>
                    <boxGeometry args={[2.8, 0.1, 1.72]} />
                    <meshPhysicalMaterial {...MAT.wingMain} />
                </mesh>

                {/* ══════════════════════════════════════
                    ALERONES
                ══════════════════════════════════════ */}

                {/* ── ALERÓN DERECHO ── */}
                <mesh position={[0.5, -0.04, 1.22]} rotation={[1.8, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshPhysicalMaterial {...MAT.wingJoint} />
                </mesh>
                <mesh position={[0.3, -0.24, 2.22]} rotation={[-1, 3.2, 3.1]}>
                    <boxGeometry args={[3.9, 0.08, 0.6]} />
                    <meshPhysicalMaterial {...MAT.wingMain} />
                </mesh>
                <mesh position={[0.5, -0.1, 1.70]} rotation={[-1, 3.2, 3.1]}>
                    <boxGeometry args={[2.7, 0.045, 0.52]} />
                    <meshPhysicalMaterial {...MAT.wingEdge} />
                </mesh>

                {/* ── ALERÓN IZQUIERDO ── */}
                <mesh position={[0.5, -0.04, -1.22]} rotation={[-1.8, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshPhysicalMaterial {...MAT.wingJoint} />
                </mesh>
                <mesh position={[0.3, -0.24, -2.22]} rotation={[1, 3.2, 3.1]}>
                    <boxGeometry args={[3.9, 0.08, 0.6]} />
                    <meshPhysicalMaterial {...MAT.wingMain} />
                </mesh>
                <mesh position={[0.5, -0.1, -1.70]} rotation={[1, 3.2, 3.1]}>
                    <boxGeometry args={[2.7, 0.045, 0.52]} />
                    <meshPhysicalMaterial {...MAT.wingEdge} />
                </mesh>

                {/* ══════════════════════════════════════
                    CONECTORES DE TURBINA
                ══════════════════════════════════════ */}
                <mesh position={[-1.9, 0.4, 1]} rotation={[2.8, 0, 0]}>
                    <boxGeometry args={[0.2, 0.1, 1.6]} />
                    <meshPhysicalMaterial {...MAT.turbineConnector} />
                </mesh>
                <mesh position={[-1.9, 0.4, -1]} rotation={[-2.8, 0, 0]}>
                    <boxGeometry args={[0.2, 0.1, 1.6]} />
                    <meshPhysicalMaterial {...MAT.turbineConnector} />
                </mesh>

             

               
                {/* ┌─────────────────────────────────────────────────┐
                    │  OPCIÓN 2 — Pods laterales de propulsión        │
                    │  Dos bloques azules en costados traseros        │
                    │  Sensación de múltiples motores auxiliares      │
                    └─────────────────────────────────────────────────┘ */}
                {/*
                <group>
                    <mesh position={[-2.0, 0.20, 0.95]}>
                        <boxGeometry args={[1.10, 0.42, 0.38]} />
                        <meshPhysicalMaterial {...MAT.podBlue} />
                    </mesh>
                    <mesh position={[-2.0, 0.42, 0.95]}>
                        <boxGeometry args={[1.10, 0.05, 0.40]} />
                        <meshPhysicalMaterial {...MAT.wingMain} />
                    </mesh>
                    <mesh position={[-2.0, -0.02, 0.95]}>
                        <boxGeometry args={[1.10, 0.05, 0.40]} />
                        <meshPhysicalMaterial {...MAT.wingEdge} />
                    </mesh>
                    <mesh position={[-2.52, 0.20, 0.95]}>
                        <boxGeometry args={[0.10, 0.30, 0.30]} />
                        <meshPhysicalMaterial {...MAT.exhaustPlate} />
                    </mesh>
                    <mesh position={[-2.0, 0.20, -0.95]}>
                        <boxGeometry args={[1.10, 0.42, 0.38]} />
                        <meshPhysicalMaterial {...MAT.podBlue} />
                    </mesh>
                    <mesh position={[-2.0, 0.42, -0.95]}>
                        <boxGeometry args={[1.10, 0.05, 0.40]} />
                        <meshPhysicalMaterial {...MAT.wingMain} />
                    </mesh>
                    <mesh position={[-2.0, -0.02, -0.95]}>
                        <boxGeometry args={[1.10, 0.05, 0.40]} />
                        <meshPhysicalMaterial {...MAT.wingEdge} />
                    </mesh>
                    <mesh position={[-2.52, 0.20, -0.95]}>
                        <boxGeometry args={[0.10, 0.30, 0.30]} />
                        <meshPhysicalMaterial {...MAT.exhaustPlate} />
                    </mesh>
                </group>
                */}

                {/* ┌─────────────────────────────────────────────────┐
                    │  OPCIÓN 3 — Rejillas de escape con emisivo      │
                    │  Panel oscuro con ranuras violeta brillantes    │
                    │  Efecto industrial sci-fi / reactor de calor    │
                    └─────────────────────────────────────────────────┘ */}
                
                <group>
                    {/* cubierta */}
                    <mesh position={[-0.5, 0.38, 0]}>
                        <boxGeometry args={[2.3, 1.06, 0.2]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>

                    <mesh position={[-2.1, 0.20, 0.55]}>
                        <boxGeometry args={[0.95, 0.44, 0.55]} />
                        <meshPhysicalMaterial {...MAT.exhaustPlate} />
                    </mesh>
                    <mesh position={[-2.1, 0.28, 0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.14, 0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.00, 0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.20, -0.55]}>
                        <boxGeometry args={[0.95, 0.44, 0.55]} />
                        <meshPhysicalMaterial {...MAT.exhaustPlate} />
                    </mesh>
                    <mesh position={[-2.1, 0.28, -0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.14, -0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.00, -0.55]}>
                        <boxGeometry args={[0.97, 0.06, 0.57]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.20, 0]}>
                        <boxGeometry args={[0.95, 0.44, 0.35]} />
                        <meshPhysicalMaterial {...MAT.exhaustPlate} />
                    </mesh>
                    <mesh position={[-2.1, 0.28, 0]}>
                        <boxGeometry args={[0.97, 0.06, 0.37]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.14, 0]}>
                        <boxGeometry args={[0.97, 0.06, 0.37]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                    <mesh position={[-2.1, 0.00, 0]}>
                        <boxGeometry args={[0.97, 0.06, 0.37]} />
                        <meshStandardMaterial {...MAT.exhaustGlow} />
                    </mesh>
                </group>
               

           
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