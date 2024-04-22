import { Fragment } from "react";

import { useState, useEffect } from 'react'

import Header from './components/ui/Header'
import Home from './components/ui/Home'
import About from './components/ui/About'
import Services from "./components/ui/Services";
import Menu from "./components/ui/Menu";
import Team from "./components/ui/Team";
import Testimonials from "./components/ui/Testimonials";
import Footer from './components/ui/Footer'
import Kontak from './components/ui/Kontak'
import { CircleLoader } from 'react-spinners'

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Fragment>
      {loading ? <CircleLoader
        color={'#00224D'} loading={loading} size={200} w cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> : <main>
        <Header />
        <Home />
        <About />
        <Services />
        <Menu />
        <Team />
        <Testimonials />
        <Kontak />
        <Footer />
      </main>}
    </Fragment>
  )
}
