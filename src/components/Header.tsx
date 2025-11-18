export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-sm z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">📚</span>
          </div>
          <span className="text-2xl font-bold gradient-text">BookEssence</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">
            How it Works
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-600 font-medium">
            Benefits
          </a>
          <a href="#steps" className="text-gray-600 hover:text-blue-600 font-medium">
            Process
          </a>
          <button className="btn-primary text-sm">Start Reading</button>
        </nav>
      </div>
    </header>
  )
}
