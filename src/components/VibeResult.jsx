export default function VibeResult({ result }) {
  if (!result) return null

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{result.VIBE_NAME?.Short || 'Your Vibe'}</h3>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Description</h4>
            <p className="mt-1 text-gray-800 text-sm leading-relaxed">{result.DESCRIPTION}</p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Tone Words</h4>
              <p className="mt-1 text-gray-800 text-sm">{Array.isArray(result.TONE_WORDS) ? result.TONE_WORDS.join(', ') : result.TONE_WORDS}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Visual Style</h4>
              <p className="mt-1 text-gray-800 text-sm">{Array.isArray(result.VISUAL_STYLE) ? result.VISUAL_STYLE.join(', ') : result.VISUAL_STYLE}</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Use Cases</h4>
            <ul className="mt-1 list-disc list-inside text-sm text-gray-800 space-y-1">
              {Array.isArray(result.USE_CASES) && result.USE_CASES.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Tags</h4>
            <div className="mt-1 flex flex-wrap gap-2">
              {Array.isArray(result.TAGS) && result.TAGS.map((t, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 text-xs">{t}</span>
              ))}
            </div>
          </div>

          {result.OPTIONAL_PROMPT_HINT && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700">Prompt Hint</h4>
              <p className="mt-1 text-sm text-gray-800 font-mono break-words">{result.OPTIONAL_PROMPT_HINT}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
