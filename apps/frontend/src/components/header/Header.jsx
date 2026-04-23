export default function Header({}) {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md">
      <h1 className="text-xl font-bold tracking-wide">Orbital Forge</h1>

      <nav className="flex gap-6 text-sm">
        <a href="#explorar">Explorar</a>
        <a href="#constelaciones">Constelaciones</a>
        <a href="#comunidad">Comunidad</a>
        <a href="#crear">Crear</a>
      </nav>
    </header>
  );
}
