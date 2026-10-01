import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    if (import.meta.env.DEV) {
      window.__lenis = lenis
      window.ScrollTrigger = ScrollTrigger
    }
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [enabled])
}
