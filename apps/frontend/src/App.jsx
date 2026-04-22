import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide">Orbital Forge</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#explorar">Explorar</a>
          <a href="#constelaciones">Constelaciones</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#crear">Crear</a>
        </nav>
      </header>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-linear-to-b from-slate-950 via-black to-slate-900" />
        </div>

        <section className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Plataforma espacial interactiva
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Explora el universo. <br />
            Crea tu propio sistema solar.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Descubre planetas, constelaciones y sistemas solares creados por la
            comunidad en una experiencia web moderna e inmersiva.
          </p>

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