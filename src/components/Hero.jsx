import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
        <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            VibeSmith — Coin Your Creative AI Vibes
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl">
            Answer a few quick questions and get a named vibe with tags, styles, use-cases, and a prompt hint — ready for AI images, video, audio, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
