import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
