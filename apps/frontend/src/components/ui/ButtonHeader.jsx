export default function ButtonHeader({}) {
  return (
    <>
      <div
        className="
  
    bg-purple-600 
    text-yellow-400 
    py-4 px-4 
    flex items-center gap-2
    basis-50 
    
   
    rounded-tl-2xl /* Superior izquierda (Original) */
    rounded-r-2xl  /* Redondeamos AMBAS esquinas derechas (Superior e Inferior) */
    
   
    [clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)]
  "
      >
        AlienSpace
      </div>
    </>
  );
}
