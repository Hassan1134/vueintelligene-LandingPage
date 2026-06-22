export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Logo & Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://vuetelligence.com/assets/white-logo-dd7001ca.png"
                className="w-32 h-auto"
                alt="Logo"
              />
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">info@vuetelligence.com</p>
              <p className="text-gray-400 text-sm">+1 (866) 357-5012</p>
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="flex justify-center gap-8">
            <a href="/" className="text-gray-400 hover:text-white transition text-sm">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-white transition text-sm">
              About
            </a>
            <a href="/projects" className="text-gray-400 hover:text-white transition text-sm">
              Works
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex justify-end gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.379 0 9.75 4.371 9.75 9.75s-4.371 9.75-9.75 9.75S2.25 17.379 2.25 12 6.621 2.25 12 2.25m3.5 5.25a.75.75 0 100-1.5.75.75 0 000 1.5M12 6a6 6 0 100 12 6 6 0 000-12m0 2a4 4 0 110 8 4 4 0 010-8" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© Vuetelligence copyright 2026</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
