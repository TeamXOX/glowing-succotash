export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif text-white">
          Know <span className="gradient-text">Every Character</span>
          <br /> Like You've <span className="text-red-400">Never Known</span> Them Before
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Peel back the layers of classic literature. From <em className="text-red-400">Brothers Karamzov</em> to the darkest psychological depths—understand every motivation, every secret, every hidden truth without drowning in archaic language.
        </p>

        <p className="text-md text-gray-400 mb-10 max-w-2xl mx-auto italic">
          "It's not enough to read. You have to understand. You have to <span className="text-red-400 font-semibold">see</span> them."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary text-lg font-serif">
            Start Observing
          </button>
          <button className="btn-secondary text-lg font-serif">
            The Dark Method
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-2xl mx-auto">
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
            <p className="text-sm text-gray-300">Time Saved</p>
          </div>
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
            <p className="text-sm text-gray-300">Depth Preserved</p>
          </div>
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
            <p className="text-sm text-gray-300">Books Analyzed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
