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
          Master <span className="gradient-text">Classic Books</span>
          <br /> Without the <span className="text-red-400">Difficult Language</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Transform complex translations into crystal-clear understanding. <em className="text-red-400">Brothers Karamazov</em>, Tolstoy, Dostoevsky—experience their full psychological depth using simple, modern language that preserves every ounce of essence.
        </p>

        <p className="text-md text-gray-400 mb-10 max-w-2xl mx-auto italic">
          "Difficult words obscure meaning. Simple words reveal truth. Same depth. Zero confusion."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary text-lg font-serif">
            Learn the Method
          </button>
          <button className="btn-secondary text-lg font-serif">
            See Examples
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-2xl mx-auto">
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">2x</div>
            <p className="text-sm text-gray-300">Reading Speed</p>
          </div>
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
            <p className="text-sm text-gray-300">Essence Preserved</p>
          </div>
          <div className="bg-red-950/20 border border-red-800/30 rounded-lg p-4 backdrop-blur">
            <div className="text-3xl font-bold text-red-400 mb-2">0%</div>
            <p className="text-sm text-gray-300">Confusion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
