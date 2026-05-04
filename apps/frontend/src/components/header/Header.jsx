export default function Header() {
  const menuItems = ['Ajustes', 'Sonido', 'Niveles', 'Login']

  return (
    <header
      className="
        fixed top-4 left-1/2 z-50
        w-[calc(100%-2rem)] max-w-7xl
        -translate-x-1/2
        rounded-3xl
        border border-cyan-300/20
        bg-slate-950/45
        px-4 py-3
        shadow-[0_0_50px_rgba(34,211,238,0.18)]
        backdrop-blur-2xl
      "
    >
      <nav className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="
            flex h-12 min-w-52 items-center
            rounded-2xl
            bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400
            px-5
            text-xl font-black tracking-wide text-white
            shadow-[0_0_30px_rgba(168,85,247,0.45)]
            [clip-path:polygon(0%_0%,92%_0%,100%_50%,92%_100%,0%_100%)]
          "
        >
          AlienSpace
        </div>

        {/* Links */}
        <div className="flex flex-1 items-center justify-end gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-7 py-3
                text-base font-semibold text-slate-100
                shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-cyan-300/50
                hover:bg-cyan-300/10
                hover:text-cyan-200
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}