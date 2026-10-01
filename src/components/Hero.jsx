import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'motion/react'
import HeroPoster from './HeroPoster'

const Canvas = lazy(() => import('@react-three/fiber').then((m) => ({ default: m.Canvas })))
const GemScene = lazy(() => import('./HeroScene'))

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [webglOk, setWebglOk] = useState(false)

  useEffect(() => {
    setWebglOk(hasWebGL())
  }, [])

  // Conservative by design: reduced-motion or no WebGL => never mount the canvas at all.
  const canRender3D = webglOk && !reduce

  return (
    <section
      id="top"
      className="relative isolate flex flex-col items-start gap-10 overflow-visible px-6 text-left sm:px-16 md:min-h-[480px] md:justify-center md:gap-0"
    >
      {/* Mobile (<sm): a normal-flow box below the copy — never overlaps text, so
          legibility never depends on what the 3D scene happens to render.
          sm+: pops out to absolute full-bleed, free to sit behind the copy. */}
      <div className="relative order-2 h-[300px] w-full sm:absolute sm:inset-0 sm:order-none sm:-inset-x-10 sm:z-0 sm:h-auto sm:w-auto md:-inset-x-20">
        {/* no pointer-events-none here — the canvas needs real pointer events for the tilt */}
        <div className="h-full w-full">
          {canRender3D ? (
            <Suspense fallback={<HeroPoster />}>
              <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
                camera={{ position: [0, 0, 10], fov: 38 }}
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
              >
                <Suspense fallback={null}>
                  <GemScene reduced={false} />
                </Suspense>
              </Canvas>
            </Suspense>
          ) : (
            <HeroPoster />
          )}
        </div>
      </div>

      <div className="relative z-10 order-1 flex w-full max-w-[560px] flex-col items-start gap-5 text-left sm:order-none">
        <h1 className="text-[length:var(--step-hero)]">Be impossible to miss.</h1>
        <p className="max-w-[46ch] text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Your customers are already searching for businesses like yours. We build the social
          presence, the website, and the AI systems that turn that search into a booked job.
        </p>
        <div className="mt-1 flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-primary pointer-events-auto">
            Book an appointment
          </Link>
          <a href="#services" className="btn btn-secondary pointer-events-auto">
            See what we do
          </a>
        </div>
      </div>
    </section>
  )
}
