export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-transparent backdrop-blur border-b border-red-950/30 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-950 rounded-lg flex items-center justify-center border border-red-800">
            <span className="text-red-300 font-bold text-xl">📖</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white font-serif">OBSERVE</span>
            <span className="text-xs text-red-400 font-light">The Art of Understanding</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#how-it-works" className="text-gray-400 hover:text-red-400 font-medium transition-colors text-sm">
            Method
          </a>
          <a href="#benefits" className="text-gray-400 hover:text-red-400 font-medium transition-colors text-sm">
            Why It Works
          </a>
          <a href="#steps" className="text-gray-400 hover:text-red-400 font-medium transition-colors text-sm">
            The Analysis
          </a>
          <button className="btn-primary text-sm">Begin Your Descent</button>
        </nav>
      </div>
    </header>
  )
}
