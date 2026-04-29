const Footer = () => {
  return (
    <footer>
      <div className="bg-violet-600 py-16 px-4 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-violet-200 text-sm leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter.
            Start your free trial today.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="btn bg-white text-violet-600 hover:bg-gray-100 rounded-full px-6 border-none font-semibold">
              Explore Products
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-violet-600 rounded-full px-6">
              View Pricing
            </button>
          </div>
          <p className="text-violet-300 text-xs">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      <div className="bg-gray-900 py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

            <div className="lg:col-span-1">
              <h3 className="text-xl font-extrabold text-white mb-3">DigiTools</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-3">
                {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                  <li key={item}>
                    <a className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Social Links</h4>
              <div className="flex items-center gap-3">
                <a className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">© 2026 Digitools. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <a key={item} className="text-gray-500 text-xs hover:text-white cursor-pointer transition-colors">{item}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;