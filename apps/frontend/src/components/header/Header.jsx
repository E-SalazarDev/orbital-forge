export default function Header({}) {
  return (
    <header className="bg-purple-600/20 flex justify-center py-7 gap-x-10 mx-2.5 text-2xl">
       
       <div className="bg-red-600 basis-50">
           Ajustes
       </div>

       <div className="bg-sky-500 basis-50">
           Sonido
       </div>

       <div className="bg-fuchsia-400 basis-50">
           Niveles
       </div>
 

       <div className="bg-purple-400 basis-50">
           Perfil
       </div>
 

    </header>
  );
}


//  <div className='bg-amber-600 flex gap-x-28 justify-around py-2'> 
//            <div className='basis-64 bg-red-700'>hola</div>
//            <div className='basis-3xs bg-fuchsia-400'>hola</div>
//            <div className='bg-amber-950 flex'>hola</div>
//        </div>