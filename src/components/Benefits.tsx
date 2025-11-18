export default function Benefits() {
  const benefits = [
    {
      icon: "👁️",
      title: "See Beyond the Surface",
      description: "Strip away the archaic prose and observe what really matters—every character's motivation, every psychological turn, every hidden layer revealed."
    },
    {
      icon: "🔗",
      title: "Understand Psychology",
      description: "Grasp the psychological depths of characters. Know them intimately. Understand their fears, desires, and the darkness that drives them."
    },
    {
      icon: "⚡",
      title: "Maintain Intensity",
      description: "No watering down. Every essential moment, every twist, every revelation remains intact. Clarity, not compromise."
    },
    {
      icon: "📖",
      title: "Modern Language",
      description: "Archaic words stripped away. Complex sentences simplified. Meaning crystallized. But the power—the power stays."
    },
    {
      icon: "🎯",
      title: "Guided Observation",
      description: "Expert annotations point you to the crucial passages. Explanations reveal hidden meanings. You don't miss a thing."
    },
    {
      icon: "🧠",
      title: "Perfect Recall",
      description: "Clarity burns things into memory. You'll remember every character, every plot point, every psychological revelation perfectly."
    },
    {
      icon: "🌐",
      title: "Historical Insight",
      description: "Understand the world these characters inhabited. The cultural darkness. The philosophical undercurrents. All explained."
    },
    {
      icon: "🔐",
      title: "Exclusive Access",
      description: "Join readers who've truly understood classic literature. Enter the circle of those who know these stories inside and out."
    }
  ]

  return (
    <section id="benefits" className="py-24 bg-gradient-dark">
      <div className="container-custom">
        <h2 className="section-title text-center">
          Why <span className="gradient-text">OBSERVE</span>?
        </h2>
        <p className="section-subtitle text-center text-gray-400">
          Because understanding literature deeply is a form of power. Know what others miss.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-effect border border-red-800/30 hover:border-red-600/60 rounded-xl p-6 hover:shadow-lg hover:glow-red transition-all hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 font-serif">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-950/30 to-red-900/20 border border-red-800/40 rounded-2xl p-8 md:p-12 glow-red">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-serif">10K+</div>
              <p className="text-gray-200">Readers Awakened</p>
              <p className="text-sm text-gray-400 mt-1">Who now understand books they once abandoned</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-serif">500+</div>
              <p className="text-gray-200">Classics Dissected</p>
              <p className="text-sm text-gray-400 mt-1">From Dostoevsky's darkness to modern psychology</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-serif">99%</div>
              <p className="text-gray-200">Retention Rate</p>
              <p className="text-sm text-gray-400 mt-1">Readers remember everything they learn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
