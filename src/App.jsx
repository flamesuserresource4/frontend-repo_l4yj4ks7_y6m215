import { useState } from 'react'
import Hero from './components/Hero'
import VibeForm from './components/VibeForm'
import VibeResult from './components/VibeResult'

function App() {
  const [result, setResult] = useState(null)

  const generateVibe = (answers) => {
    // Very lightweight on-device generation mimicking the requested JSON-like structure
    // In a future iteration, this can call the backend for a model-driven result
    const what = answers.what?.trim() || 'creative piece'
    const tone = answers.tone?.trim() || 'futuristic, dreamy'
    const style = answers.style?.trim() || 'cinematic, neon, grain'
    const audience = answers.audience?.trim() || 'TikTok or YouTube'
    const refs = answers.refs?.trim()

    // Coin a short vibe name by blending tone + style
    const vibeName = (() => {
      const toneWord = (tone.split(/[;,]/)[0] || 'Neo').split(' ')[0]
      const styleWord = (style.split(/[;,]/)[0] || 'Noir').split(' ')[0]
      const combos = [
        `${toneWord} ${styleWord} Forge`,
        `${toneWord} ${styleWord} Cinema`,
        `${toneWord} ${styleWord} Studio`,
        `${toneWord} ${styleWord} Pulse`,
      ]
      return combos[Math.floor(Math.random() * combos.length)]
    })()

    const useCases = [
      `30–45s ${what} for ${audience}`,
      `Thumbnail key art in ${style}`,
      `Short teaser montage with ${tone} pacing`,
      `Brand moodboard referencing ${refs || 'select inspirations'}`,
    ]

    const tags = [
      '#vibe', '#ai_creative', '#promptcraft', '#filmmaking', '#design', '#motion', '#concept'
    ]

    const structured = {
      VIBE_NAME: { Short: vibeName },
      DESCRIPTION: `A ${tone} feel translated into ${style}. Built for ${audience}, it leans into clear shapes, bold contrast, and practical promptability for fast iteration.`,
      TONE_WORDS: tone.split(/[ ,;]+/).filter(Boolean).slice(0,7),
      VISUAL_STYLE: style.split(/[ ,;]+/).filter(Boolean).slice(0,7),
      USE_CASES: useCases,
      TAGS: tags,
      OPTIONAL_PROMPT_HINT: `ultra-detailed ${style}, ${tone}, shot on virtual anamorphic, subtle film grain, clean background, high readability`
    }

    setResult(structured)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      <VibeForm onSubmit={generateVibe} />
      <VibeResult result={result} />
      <div className="py-10 text-center text-sm text-gray-500">
        <a className="underline" href="/test">Backend & DB test</a>
      </div>
    </div>
  )
}

export default App
