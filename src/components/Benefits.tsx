export default function Benefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Read Faster",
      description: "Consume classic literature 50% faster by skipping unnecessary complexity while keeping every essential idea."
    },
    {
      icon: "🧠",
      title: "Understand Deeper",
      description: "Clear explanations of complex themes and characters help you grasp the author's intent more thoroughly."
    },
    {
      icon: "💎",
      title: "Preserve Essence",
      description: "Every important plot point, character development, and thematic element is kept intact. Nothing crucial is lost."
    },
    {
      icon: "📚",
      title: "Learn Modern Language",
      description: "See how archaic and complex ideas translate to modern language you can relate to and understand immediately."
    },
    {
      icon: "🎯",
      title: "Guided Learning",
      description: "Our expert annotations highlight important passages and explain literary devices to enrich your understanding."
    },
    {
      icon: "🌟",
      title: "Retain Everything",
      description: "Studies show that clarity improves retention. You'll remember and recall what you've read more effectively."
    },
    {
      icon: "🔍",
      title: "Cultural Context",
      description: "Understand the historical, cultural, and philosophical backgrounds that make classic books so meaningful."
    },
    {
      icon: "👥",
      title: "Join a Community",
      description: "Connect with other readers who love classic literature. Share insights and discuss these timeless works together."
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          Why Choose <span className="gradient-text">BookEssence</span>?
        </h2>
        <p className="section-subtitle text-center">
          Experience classic literature the way it was meant to be understood
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
              <p className="text-gray-700">Happy Readers</p>
              <p className="text-sm text-gray-600 mt-1">Who finished books they once found too difficult</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-700">Classics Summarized</p>
              <p className="text-sm text-gray-600 mt-1">From Dostoevsky to Austen, all simplified</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
              <p className="text-gray-700">Average Rating</p>
              <p className="text-sm text-gray-600 mt-1">Based on thousands of reader reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
