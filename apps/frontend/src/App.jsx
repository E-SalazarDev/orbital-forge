import { Routes, Route } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import HomeScene from './scenes/home/Scenes'
function HomePage() {
  return (

    <div className="min-h-screen bg-black text-white ">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-linear-to-b mask-t-from-sky-950 via-slate-950 to-purple-950" />
      </div>

      <HomeScene />
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

