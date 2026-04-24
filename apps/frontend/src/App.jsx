import { Routes, Route } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">


      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-linear-to-b mask-t-from-sky-950 via-slate-950 to-purple-950" />
          {/* via-mist-950 */}
        </div>                        

        <section className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Plataforma espacial interactiva
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Nebula
          </h2>

         

          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black">
              Explorar ahora
            </button>

            <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              Crear mi sistema
            </button>
          </div>
          
        </section>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

function ModularShip() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1.4, 0.4, 2]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      <mesh position={[0, 0.35, -0.4]}>
        <boxGeometry args={[0.7, 0.35, 0.8]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>

      <mesh position={[-1, 0, 0.2]}>
        <boxGeometry args={[1.5, 0.12, 0.7]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <mesh position={[1, 0, 0.2]}>
        <boxGeometry args={[1.5, 0.12, 0.7]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
    </group>
  )
}