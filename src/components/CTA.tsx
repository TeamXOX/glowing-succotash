export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Master Classic Literature?
        </h2>

        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
          Join thousands of readers who are experiencing the beauty of classic books without the frustration of archaic language and complex prose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 text-lg">
            Start Free Today
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors text-lg">
            See Sample Summaries
          </button>
        </div>

        <p className="text-opacity-75 text-white max-w-2xl mx-auto">
          No credit card required. Access 3 classic book summaries immediately. Full library access with premium membership.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto opacity-90 text-sm">
          <div>📖 Free to Start</div>
          <div>✓ No Ads</div>
          <div>💾 Downloadable</div>
          <div>🔄 Regular Updates</div>
        </div>
      </div>
    </section>
  )
}
