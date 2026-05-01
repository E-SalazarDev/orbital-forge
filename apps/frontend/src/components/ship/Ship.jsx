import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'


// <sphereGeometry args={[4, 7, 9]} /> esfera // <torusGeometry args={[5, 0.3, 9, 100]} /> aro
// rotation={[Math.PI / 2, 0, 0]}


export default function Ship() {
  return (
    <group
      position={[0, 0, 0]}      // mueve toda la nave
      rotation={[0, 0, 0]}  // inclinar / diagonal
      scale={1}                 // tamaño general
    >
      
      {/* CUERPO PRINCIPAL*/}
      <mesh>
        <Geometry>
          
          {/* Base */}
          {/* <Base>
            <boxGeometry args={[8, 2,3]} />
          </Base> */}

 {/* <boxGeometry args={[1.5, 0.5, 0.8]} /> */}
          {/* Parte extra arriba (amarillo) */}
          {/* <Addition position={[0, 0, 0]}>
           
            <sphereGeometry args={[1.5, 17, 9]}/>
          </Addition> */}

          {/* Agujero con cilindro */}
          {/* <Subtraction position={[0, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
          </Subtraction> */}
        </Geometry>

        {/* 🔧 color principal */}
        <meshStandardMaterial color="green" />
      </mesh>

     
{/* Debugs */}

      <mesh position={[5, 0, 0]}>
       <sphereGeometry args={[2, 17, 9]}/>
        <meshStandardMaterial color="yellow" wireframe />
      </mesh>

      {/* box red */}
      <mesh >
        <boxGeometry args={[10, 3,3]} />
        <meshStandardMaterial color="red" wireframe  />
      </mesh>
       
       <mesh position={[-5,0,0]}>
      {/* blue */}
        <boxGeometry args={[3, 3,16]} />
        <meshStandardMaterial color="blue" wireframe  />
      </mesh>

    </group>
  )
}