'use client'
import { useState, useEffect, useRef } from 'react'

const firstName = "Max"
const lastName = "Jin"

const links = [
  //{ label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  //{ label: 'Projects', href: '#projects' },
  //{ label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [introPast, setIntroPast] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
    const introHeading = document.querySelector("#intro-heading")
    if (!introHeading) return
    observerRef.current = new IntersectionObserver(
        ([entry]) => setIntroPast(!entry.isIntersecting),
        { threshold: 0 }
    )
    observerRef.current.observe(introHeading)
    return () => observerRef.current?.disconnect()
  }, [])


  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick = {(e) => scrollTo(e, "#")} className="relative font-display text-2xl font-light text-black tracking-tight hover:text-ember transition-colors">
          <div className="relative inline-flex items-baseline">
            <span className={`block transition-all duration-500 ${
                introPast ? 'opacity-100' : 'opacity-0'
            }`}>
                {firstName}
            </span>

            <span className={`block transition-all duration-500 delay-250 ${
                introPast ? 'opacity-100 translate-x-[calc(30%)]' : 'opacity-0 translate-x-0' 
            }`}>
                {lastName}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="font-body text-sm font-light tracking-widest text-black hover:text-ember transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a 
                href="https://drive.google.com/file/d/1ly4f65LUu3BIhi11e74QtSW1288oAJjv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-light tracking-widest text-black hover:text-ember transition-colors"
            >
                Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-espresso transition-transform duration-300 ${menuOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-espresso transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-espresso transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-sand px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-light tracking-widest text-black hover:text-ember transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}