export default function Home({ }) {

    return (
        <div className="min-h-screen bg-black text-white">


            <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-linear-to-b mask-t-from-sky-950 via-slate-950 to-purple-950" />

                </div>

                <section className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-500">
                        Plataforma espacial interactiva
                    </p>

                    <h2 className="mb-6 text-5xl font-bold leading-tight">
                        Nebula
                    </h2>


                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-black">
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