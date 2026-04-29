export default function Header({}) {
  return (
    <header className="bg-purple-600/20 flex justify-center py-7 gap-x-10 mx-2.5 text-2xl ">
       
       <div className="bg-purple-600 basis-50 rounded-tl-2xl rounded-br-4xl font-semibold text-white [clip-path:polygon()]">
          <span className="text-cyan-300">👾</span>
          AlienSpace
       </div>
 
       <div className="bg-red-600 basis-50 ">
           Ajustes
       </div>

       <div className="bg-sky-500 basis-50">
           Sonido
       </div>

       <div className="bg-fuchsia-400 basis-50">
           Niveles
       </div>
 

       <div className="bg-purple-400 basis-50">
           Login
       </div>
 

    </header>
  );
}
