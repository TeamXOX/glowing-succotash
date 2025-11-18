export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#0a0e27] to-black border-t border-red-900/20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-950 rounded-lg flex items-center justify-center border border-red-800">
                <span className="text-red-300 font-bold">📖</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif">OBSERVE</span>
                <p className="text-xs text-red-400">Understand Deeply</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Where readers become obsessed with understanding. Where classic literature reveals its deepest secrets.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 font-serif">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Browse Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">The Method</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 font-serif">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Reading Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 font-serif">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} OBSERVE. All rights reserved. See what others miss.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition">Discord</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
