export default function Header({}) {
  return (
    <header
      className="
    bg-linear-to-r from-purple-900/40 via-indigo-900/30 to-sky-800/30 
    shadow-[0_0_60px_rgba(168,85,247,0.9)]
    border border-purple-500/20
    backdrop-blur-[180px]
    flex flex-wrap
    justify-center
    items-center 
    py-7 
    gap-x-10 gap-y-4
    mx-2.5 
    text-2xl text-white font-semibold
    "
    >
      <div
        className="
          bg-purple-600 
         text-yellow-400 
           py-4 px-4 
           flex items-center gap-2     
           rounded-tl-2xl        
          [clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)]
          flex-none min-w-60
       "
      >
        {/* <span className="text-cyan-300 ">👾</span> */}
        AlienSpace
      </div>

      <div className="bg-red-600  flex flex-1 min-w-30 items-center justify-center py-4 px-4  ">
        Ajustes
      </div>

      <div className="bg-sky-500  flex flex-1 min-w-30 items-center justify-center py-4 px-4  ">
        Sonido
      </div>

      <div className="bg-fuchsia-400  flex flex-1 min-w-30 items-center justify-center py-4 px-4  ">
        Niveles
      </div>

      <div className="bg-purple-400 flex flex-1 min-w-30  justify-center items-center py-4 px-4">
        Login
      </div>
    </header>
  );
}
