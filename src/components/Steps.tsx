export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Recognize the Noise",
      description: "Identify what's obscuring the truth. Archaic language. Verbose descriptions. Complex narrative structures. All the things that separate you from understanding the character.",
      example: "'Brothers Karamzov' hides its truth beneath Russian naming conventions and 19th-century philosophical tangents."
    },
    {
      number: 2,
      title: "Translate the Mask",
      description: "Strip away the camouflage. Convert archaic words into clear, modern language. What was hidden becomes visible. What was obscured becomes obvious.",
      example: "'The veracity of his countenance betrayed his inner tumult' becomes 'His face showed how troubled he felt.' Clarity. Honesty."
    },
    {
      number: 3,
      title: "Simplify Without Loss",
      description: "Break down convoluted sentences into direct ones. Long, winding prose becomes lean and sharp. But the meaning—the psychological weight—it stays intact.",
      example: "'Having pondered deeply upon suffering...' becomes 'After thinking about suffering.' Simpler. Stronger. More powerful."
    },
    {
      number: 4,
      title: "Extract What Matters",
      description: "Separate signal from noise. The character's guilt. Their obsessions. Their darkness. That's what matters. Everything else is distraction.",
      example: "In 'Brothers Karamzov': Dmitri's guilt, Ivan's philosophy, Alyosha's redemption. These are the truths. The rest is noise."
    },
    {
      number: 5,
      title: "Add Context, Not Clutter",
      description: "Provide the missing pieces. Historical context. Cultural references. Philosophical background. Information that clarifies, not complicates.",
      example: "Russian naming traditions. The cultural darkness of 19th century. The philosophical movements driving these characters."
    },
    {
      number: 6,
      title: "Preserve the Essence",
      description: "Even in simplification, maintain the author's voice. Dostoevsky's introspection. His intensity. His darkness. Don't lose that. Just make it clearer.",
      example: "The psychological weight remains. The emotional truth stays. Only the unnecessary complexity disappears."
    },
    {
      number: 7,
      title: "Verify Perfect Comprehension",
      description: "Test yourself. Can you see the character? Can you explain their choices? Do the plot points connect? Is the impact still there?",
      example: "You should know Dmitri as well as if you'd watched him. His guilt should feel real. The ending should devastate you."
    },
    {
      number: 8,
      title: "Build Your Reference Map",
      description: "Create a companion guide. Character maps. Timelines. Key quotes. A visual representation of who these people are and what drives them.",
      example: "Character relationship diagrams. Timeline of events. Character motivations charted. Everything visible at once."
    }
  ]

  return (
    <section id="steps" className="py-24 bg-gradient-dark">
      <div className="container-custom">
        <h2 className="section-title text-center font-serif">
          The <span className="gradient-text">8-Step Analysis</span>
        </h2>
        <p className="section-subtitle text-center text-gray-400">
          The method for peeling back layers. For seeing what others miss. For understanding at a level most readers never reach.
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
            The Result: <span className="text-red-400">Complete Understanding</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            You'll read faster. You'll understand deeper. You'll remember everything. But most importantly—you'll <span className="text-red-400 font-semibold">see</span> these characters. Really see them. You'll know their secrets better than they know themselves.
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
