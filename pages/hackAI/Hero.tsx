import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const images = [
  '/hackai/hackAIOpening.png',
  '/hackai/hackAISponsors.png',
  '/hackai/Presentation.png'
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(t)
  }, [isPlaying])

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="w-full bg-gradient-to-b from-[#F7EEDD] via-[#E3D7FF] to-[#C8B7FF] pb-8"
    >
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <header className="pt-2">
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-placard-bold text-ais-new-med-blue">
            HackAI — Build the Future
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            A weekend of rapid prototyping and collaboration. See past winners and resources below.
          </p>
        </header>

        <div className="w-64 h-32 bg-ais-new-blue rounded-xl justify-center items-center mx-auto">
          <a
          href="https://coda.io/form/Hack-AI-2026-Interest_dh6_fn-2o0i"
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button
              className="
                mt-6
                flex justify-center
                bg-ais-new-blue
                text-ais-new-blue
                px-2 
                rounded-xl
                w-fit mx-auto
              "
            >
              Register Interest
            </Button>
          </a>
        </div>

        



        <section className="mt-8 flex justify-center ">
          <div className="relative w-full max-w-5xl aspect-video bg-white rounded-lg overflow-hidden shadow-md">
            {images.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 aspect-video ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                draggable={false}
              />
            ))}

            <button
              aria-label="previous"
              onClick={() => { prev(); setIsPlaying(false) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow hover:bg-white"
            >
              ‹
            </button>
            <button
              aria-label="next"
              onClick={() => { next(); setIsPlaying(false) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow hover:bg-white"
            >
              ›
            </button>

            <div className="absolute left-0 right-0 bottom-3 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`go-to-${i}`}
                  onClick={() => { setIndex(i); setIsPlaying(false) }}
                  className={`w-3 h-3 rounded-full ${i === index ? 'bg-ais-new-med-blue' : 'bg-white/70'}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
