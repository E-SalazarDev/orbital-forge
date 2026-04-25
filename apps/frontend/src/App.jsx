import { Routes, Route } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import HomeScene from './scenes/home/Scenes'
function HomePage() {
  return (

    <div className="min-h-screen bg-black text-white">
        <HomeScene/>
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

