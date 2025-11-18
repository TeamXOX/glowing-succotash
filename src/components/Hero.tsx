export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Master <span className="gradient-text">Classic Literature</span>
          <br /> Without the <span className="text-red-500">Heavy Words</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform complex classic books like <em>Brothers Karamzov</em> into simple, essence-preserving summaries. Read faster, understand deeper, lose nothing important.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg">
            Explore Summaries
          </button>
          <button className="btn-secondary text-lg">
            Learn the Method
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">50%</div>
            <p className="text-sm md:text-base text-gray-600">Less Reading Time</p>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm md:text-base text-gray-600">Essence Preserved</p>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <p className="text-sm md:text-base text-gray-600">Books Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
