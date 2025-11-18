export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-red-950/30 to-[#0a0e27] border-t border-red-900/20">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-serif">
          Stop Reading Blindly
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
          You've been missing details. Misunderstanding motivations. Walking through these stories without truly seeing them.
        </p>

        <p className="text-lg text-red-400 max-w-2xl mx-auto mb-10 italic">
          That ends now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-red-700/50 transition-all transform hover:scale-105 text-lg font-serif">
            Start Observing Free
          </button>
          <button className="border-2 border-red-700 text-red-400 px-8 py-4 rounded-lg font-bold hover:bg-red-900/20 transition-colors text-lg font-serif">
            See What You've Missed
          </button>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm">
          No credit card required. Get access to 3 complete book analyses immediately. Unlimited access available to those ready to understand.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-gray-300 text-sm">
          <div className="border border-red-800/30 rounded-lg p-3 glass-effect">✓ Completely Free</div>
          <div className="border border-red-800/30 rounded-lg p-3 glass-effect">✓ No Distractions</div>
          <div className="border border-red-800/30 rounded-lg p-3 glass-effect">✓ Downloadable</div>
          <div className="border border-red-800/30 rounded-lg p-3 glass-effect">✓ Always Updated</div>
        </div>

        <p className="text-gray-500 max-w-2xl mx-auto mt-12 text-sm italic">
          "Knowledge is power. Understanding is obsession. And obsession is the only way to truly live."
        </p>
      </div>
    </section>
  )
}
