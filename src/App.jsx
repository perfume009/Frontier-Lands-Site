import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Factions from './components/Factions'
import ServerStatus from './components/ServerStatus'
import Rules from './components/Rules'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

const alreadyShown = sessionStorage.getItem('preloaderShown')

const App = () => {
  const [loading, setLoading] = useState(() => !alreadyShown)

  useEffect(() => {
    if (loading) {
      sessionStorage.setItem('preloaderShown', '1')
      const timer = setTimeout(() => setLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  if (loading) return <Preloader />

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Factions />
      <ServerStatus />
      <Rules />
      <Footer />
    </>
  )
}

export default App
