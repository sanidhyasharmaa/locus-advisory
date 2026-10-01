import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

const ACCENT = '#0e7490'
const ACCENT_LIGHT = '#5fd4e8'
const GEM_R = 2.1
// Must match the page's --bg exactly: the canvas paints this as an opaque
// background (not alpha-transparent) so MeshPhysicalMaterial's transmission
// has real scene content to refract — on a truly transparent canvas there is
// nothing behind the glass to sample, which renders as near-black.
const PAGE_BG = '#fafbfb'

function useRingTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 1
    const ctx = c.getContext('2d')
    const g = ctx.createLinearGradient(0, 0, 512, 0)
    g.addColorStop(0.0, 'rgba(95,212,232,0.0)')
    g.addColorStop(0.08, 'rgba(95,212,232,0.55)')
    g.addColorStop(0.18, 'rgba(14,116,144,0.12)')
    g.addColorStop(0.3, 'rgba(95,212,232,0.6)')
    g.addColorStop(0.42, 'rgba(14,116,144,0.1)')
    g.addColorStop(0.55, 'rgba(95,212,232,0.45)')
    g.addColorStop(0.7, 'rgba(14,116,144,0.08)')
    g.addColorStop(0.85, 'rgba(95,212,232,0.3)')
    g.addColorStop(1.0, 'rgba(95,212,232,0.0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 512, 1)
    const tex = new THREE.CanvasTexture(c)
    tex.wrapS = THREE.ClampToEdgeWrapping
    return tex
  }, [])
}

function useShadowTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = c.height = 256
    const ctx = c.getContext('2d')
    const g = ctx.createRadialGradient(128, 128, 8, 128, 128, 120)
    g.addColorStop(0, 'rgba(10,20,22,0.32)')
    g.addColorStop(1, 'rgba(10,20,22,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 256, 256)
    return new THREE.CanvasTexture(c)
  }, [])
}

function useRingGeometry(inner, outer) {
  return useMemo(() => {
    const geo = new THREE.RingGeometry(inner, outer, 128)
    // RingGeometry's built-in UVs aren't a clean radial gradient across three.js
    // versions — rewrite uv.x as a true normalized radius so the banded gradient
    // texture reads as actual rings, not a single soft wash.
    const pos = geo.attributes.position
    const uv = geo.attributes.uv
    const v = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      const r = v.length()
      uv.setXY(i, (r - inner) / (outer - inner), 0.5)
    }
    return geo
  }, [inner, outer])
}

function Shard({ radius, speed, offset, tilt }) {
  const ref = useRef(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const a = t * 0.32 * speed + offset
    ref.current.position.set(Math.cos(a) * radius, Math.sin(a * 1.3) * 0.6, Math.sin(a) * radius * tilt)
    ref.current.rotation.set(a, a * 0.7, 0)
  })
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.24, 0]} />
      <meshPhysicalMaterial
        color={ACCENT_LIGHT}
        metalness={0}
        roughness={0.08}
        transmission={0.95}
        thickness={0.9}
        ior={1.4}
        envMapIntensity={1.3}
      />
    </mesh>
  )
}

// The whole glass gem + ring + shard "system". Reduced-motion freezes it on a
// single composed pose (the parent Canvas also drops frameloop to "demand").
export default function GemScene({ reduced = false }) {
  const group = useRef(null)
  const gem = useRef(null)
  const ring = useRef(null)
  const ringTex = useRingTexture()
  const ringGeo = useRingGeometry(GEM_R * 1.55, GEM_R * 2.5)
  const shadowTex = useShadowTexture()

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    const px = state.pointer.x
    const py = state.pointer.y
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, px * 0.45, 0.06)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, py * -0.12, 0.06)
    }
    if (gem.current) gem.current.rotation.y = t * 0.22
    if (ring.current) ring.current.rotation.z = 0.08 + t * 0.06
  })

  return (
    <>
      {/* opaque, matches the page exactly — gives transmission something real to refract */}
      <color attach="background" args={[PAGE_BG]} />
      <Environment preset="studio" />
      <directionalLight position={[4, 6, 4]} intensity={2.4} />
      <directionalLight position={[-5, 2, -3]} intensity={1.1} color="#bfe9f0" />
      <ambientLight intensity={0.45} />

      <group ref={group} position={[1.3, 0.05, 0]}>
        <mesh ref={gem} rotation={[0.35, 0.6, 0]}>
          <icosahedronGeometry args={[GEM_R, 0]} />
          <meshPhysicalMaterial
            color={ACCENT}
            metalness={0}
            roughness={0.06}
            transmission={0.9}
            thickness={1.1}
            ior={1.45}
            envMapIntensity={1.6}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            attenuationColor={ACCENT_LIGHT}
            attenuationDistance={2.5}
          />
        </mesh>

        <mesh ref={ring} geometry={ringGeo} rotation={[-Math.PI / 2.3, 0, 0.08]}>
          <meshBasicMaterial
            map={ringTex}
            transparent
            side={THREE.DoubleSide}
            depthWrite={false}
            toneMapped={false}
            opacity={0.95}
          />
        </mesh>

        <Shard radius={GEM_R * 2.9} speed={0.4} offset={0} tilt={0.3} />
        <Shard radius={GEM_R * 2.9 + 0.7} speed={0.65} offset={2.3} tilt={0.52} />
        <Shard radius={GEM_R * 2.9 + 1.4} speed={0.9} offset={4.6} tilt={0.74} />
      </group>

      <mesh position={[1.3, -2.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshBasicMaterial map={shadowTex} transparent depthWrite={false} />
      </mesh>
    </>
  )
}
