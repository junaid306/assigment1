import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="text-xl text-slate-600 mt-4">
        Page Not Found
      </p>
      <a href="/" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
        Back to Home
      </a>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-white">
            MyWebsite.
          </h2>

          <p className="text-sm">
            © 2026 MyWebsite. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App