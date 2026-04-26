import { Routes, Route } from 'react-router-dom'
import HomeScene from './scenes/home/Scenes'


function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <HomeScene />
      </div>

    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}