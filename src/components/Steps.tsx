export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Identify Difficult Translations",
      description: "Start by recognizing where translations become barriers. Old-fashioned vocabulary, complex syntax from another language, cultural idioms that don't translate well. These are what slow you down and cloud understanding.",
      example: "Brothers Karamazov: 'laceration of feeling' (старые переводы) → 'deep emotional pain'. 'He was in a state of continual trepidation' → 'He was constantly anxious.'"
    },
    {
      number: 2,
      title: "Replace Archaic Words with Modern Equivalents",
      description: "Every difficult word gets a simple replacement. 'Countenance' becomes 'face'. 'Melancholy' becomes 'sadness'. 'Veracity' becomes 'truth'. The meaning stays identical—only clarity improves.",
      example: "'His demeanor exhibited profound perturbation' → 'He looked deeply troubled.' Same meaning. 50% faster to read. 100% easier to understand."
    },
    {
      number: 3,
      title: "Break Down Complex Sentences",
      description: "Long, multi-clause sentences get split into shorter, clearer ones. Each thought stands alone. No meaning is lost—just the cognitive burden of parsing complicated grammar structures.",
      example: "'Having reflected upon the matter with considerable gravity, taking into account all circumstances...' → 'He thought carefully about it. He considered everything.' Faster reading. Same depth."
    },
    {
      number: 4,
      title: "Extract Core Psychological Truths",
      description: "Every scene has an emotional truth. Find it. State it clearly. This is what the author wanted you to feel—not the flowery description, but the raw human experience underneath.",
      example: "In Brothers Karamazov: 'Dmitri wrestles with guilt over his father' is the truth. Pages of description become this single, powerful insight you'll never forget."
    },
    {
      number: 5,
      title: "Add Brief Cultural Context",
      description: "When a reference needs background, add it—but keep it short. One sentence explaining a Russian custom. Two sentences on 19th-century philosophy. Context that illuminates, never overwhelms.",
      example: "'Why three names?' → Add note: 'Russians use First Name + Patronymic + Surname. Dmitri Fyodorovich Karamazov = Dmitri, son of Fyodor Karamazov.' Now you understand."
    },
    {
      number: 6,
      title: "Preserve Author's Voice & Intensity",
      description: "Simplification doesn't mean dilution. Dostoevsky's intensity remains. His psychological depth stays. His darkness persists. You're clarifying the language, not weakening the impact.",
      example: "Keep: 'His soul was torn between love and hatred.' This is simple AND powerful. Remove flowery additions that obscure this core truth."
    },
    {
      number: 7,
      title: "Test Your Understanding",
      description: "After simplifying, verify nothing was lost. Can you explain character motivations? Do plot points connect? Is the emotional impact still there? If yes, you've succeeded.",
      example: "Ask yourself: 'Could I explain Dmitri's guilt to someone?' If you can articulate it clearly, the essence is preserved. That's the test."
    },
    {
      number: 8,
      title: "Create Visual Reference Guides",
      description: "Build simple tools: character relationship maps, timeline of events, one-sentence character motivations. These accelerate comprehension and cement memory better than reading word-by-word ever could.",
      example: "One page: Character web showing relationships. One page: Timeline. One page: Core themes. These three pages give you more understanding than 500 pages of dense text."
    }
  ]

  return (
    <section id="steps" className="py-24 bg-gradient-dark">
      <div className="container-custom">
        <h2 className="section-title text-center font-serif">
          The <span className="gradient-text">8-Step Translation Method</span>
        </h2>
        <p className="section-subtitle text-center text-gray-400">
          Transform difficult translations into crystal-clear understanding. Read faster. Comprehend deeper. Remember everything. All without losing a single ounce of essence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="glass-effect border border-red-800/30 hover:border-red-600/60 rounded-xl p-8 hover:glow-red transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-900 to-red-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-red-700/50 transition-all">
                  <span className="text-red-300 font-bold text-lg font-serif">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 font-serif">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{step.description}</p>
                  <div className="bg-red-950/40 rounded-lg p-4 border-l-4 border-red-700">
                    <p className="text-xs text-gray-300">
                      <span className="font-semibold text-red-400">Example: </span>
                      {step.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-950/40 to-red-900/30 border border-red-800/40 rounded-2xl p-8 md:p-12 text-white text-center glow-red">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            The Result: <span className="text-red-400">Read 2x Faster, Understand 10x Better</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Every difficult word becomes simple. Every complex sentence becomes clear. Yet the depth, the psychology, the essence—it all stays intact. You gain the understanding of reading every word, but at twice the speed and with perfect comprehension.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-red-700/50 transition-all hover:scale-105">
              Begin the Analysis
            </button>
            <button className="border-2 border-red-700 text-red-400 px-8 py-3 rounded-lg font-bold hover:bg-red-900/20 transition-colors">
              Get the PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
