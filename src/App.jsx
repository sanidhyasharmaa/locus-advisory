import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducedMotion } from 'motion/react'
import { useSmoothScroll } from './lib/useSmoothScroll'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import OurWork from './pages/OurWork'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  const reduce = useReducedMotion()
  useSmoothScroll(!reduce)

  return (
    <div className="flex w-full flex-col overflow-x-clip">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/why-us" element={<OurWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
