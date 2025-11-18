export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Identify Complex Passages",
      description: "Scan through difficult sections of the book - passages with archaic language, philosophical discussions, or complex narrative structures that might slow your reading.",
      example: "Example: 'Brothers Karamzov' has dense philosophical arguments and old-fashioned Russian naming conventions."
    },
    {
      number: 2,
      title: "Translate Without Losing Meaning",
      description: "Convert difficult words and phrases into simple, modern language while preserving the original meaning. Focus on clarity without dumbing down the content.",
      example: "Old: 'The veracity of his countenance betrayed his inner tumult' → New: 'His face showed how troubled he felt inside'"
    },
    {
      number: 3,
      title: "Restructure Complex Sentences",
      description: "Break down long, winding sentences into shorter, clearer ones. Maintain the same information but improve readability and flow.",
      example: "Long: 'Having pondered deeply upon the nature of suffering and redemption...' → Simple: 'After thinking deeply about suffering and how we change...'"
    },
    {
      number: 4,
      title: "Highlight Core Themes",
      description: "Extract the essential plot points, character motivations, and thematic elements. Skip over verbose descriptions that don't contribute to the main narrative.",
      example: "In Brothers Karamzov: The guilt of Dmitri, Raskolnikov's inner conflict, and the search for redemption are the core themes."
    },
    {
      number: 5,
      title: "Create Parallel Reading Notes",
      description: "Develop side notes that explain cultural references, historical context, and literary devices. This speeds up understanding without requiring external research.",
      example: "Notes on Russian names, 19th century context, philosophical references"
    },
    {
      number: 6,
      title: "Maintain the Original Voice",
      description: "Even while simplifying, preserve the author's style, tone, and emotional impact. The goal is clarity, not losing the literary beauty.",
      example: "Dostoevsky's introspective, intense voice should remain - just be clearer about what's being said"
    },
    {
      number: 7,
      title: "Test Comprehension Without Loss",
      description: "Read through your simplified version and verify that no essential plot points, character development, or themes have been removed.",
      example: "Can you summarize the book's main lessons? Do the character arcs still make sense? Is the ending still impactful?"
    },
    {
      number: 8,
      title: "Create Interactive Study Guide",
      description: "Build a companion guide with chapter summaries, character maps, timeline of events, and key quotes to enhance understanding while maintaining engagement.",
      example: "Chapter-by-chapter breakdown, character relationship diagrams, timeline of events"
    }
  ]

  return (
    <section id="steps" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">
          The <span className="gradient-text">8-Step Method</span> to Master Classic Books
        </h2>
        <p className="section-subtitle text-center">
          Our proven process for transforming complex literature into accessible, essence-preserving summaries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-blue-600">Example: </span>
                      {step.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Promise: Read Smarter, Understand Deeper
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            By following this method, you can read an entire classic novel in less time while retaining 100% of the essential meaning and beauty. The essence is never lost—only the unnecessary complexity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
