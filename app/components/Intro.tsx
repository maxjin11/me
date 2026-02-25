'use client'
import { useEffect, useState } from 'react'

export default function Intro() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    const anim = (name: string, duration: string, delay: string) =>
        mounted
            ? { animation: `${name} ${duration} ease forwards`, animationDelay: delay }
            : { opacity: 0 }

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[55vw] h-full bg-parchment clip-hero -z-0" />
      <div className="absolute top-24 right-[30vw] w-4 h-4 rounded-full bg-ember opacity-40" />
      <div className="absolute bottom-1/3 right-16 w-2 h-2 rounded-full bg-umber opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-8">
          <p
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-none text-black opacity-0"
            style={anim('fadeUp', '0.7s', '0.25s')}
            id = "intro-heading"
          >
            Hey there,
            <br />
            it's Max!
          </p>
          <p
            className="font-body text-base text-[#433a3f] max-w-lg leading-relaxed opacity-0"
            style={anim('fadeUp', '0.7s', '0.4s')}
          >
            I'm a third year mathematics student at the University of Waterloo.
            <br />
            <br />
            Currently majoring in Statistics.
            <br />
            <br />
            I mainly specialize in data roles, but I love building software too!
          </p>
          <div
            className="flex items-center gap-4 opacity-0"
            style={anim('fadeUp', '0.7s', '0.5s')}
          >
            <a
                href="https://github.com/maxjin11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center border border-sand rounded-sm text-[#24292e] hover:text-ember hover:border-ember transition-colors duration-300"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            </a>

            <a
                href="https://linkedin.com/in/maxjin11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-sand rounded-sm text-[#0a66c2] hover:text-ember hover:border-ember transition-colors duration-300"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>

            <a
                href="https://instagram.com/maxjjin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-sand rounded-sm text-[#d62976] hover:text-ember hover:border-ember transition-colors duration-300"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            </a>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div
          className="relative opacity-0"
          style={anim('fadeIn', '1s', '0.6s')}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main image box */}
            <div className="img-placeholder w-full aspect-[4/3] rounded-sm overflow-hidden border border-sand group cursor-pointer">
              {/* Replace src with your image: <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
              <img src="maxstcatharines.jpg" alt="A picture of myself" className="w-full h-full object-cover" />
            </div>
            {/* Offset decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-ember/25 rounded-sm pointer-events-none" />
            {/* Small accent square */}
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-parchment border border-sand" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
    )
}