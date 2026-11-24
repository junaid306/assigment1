import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-white/15 px-4 py-2 rounded-full text-sm mb-6">
              Welcome to our website
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Future With Modern Technology
            </h1>

            <p className="text-blue-100 text-lg leading-8 mb-8">
              Discover innovative digital solutions designed
              to help you grow, learn and achieve more.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Explore Services →
              </Link>

              <Link
                to="/about"
                className="border border-white/50 px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-4">
              Innovation Starts Here
            </h2>
            <p className="text-blue-100 leading-7">
              Transforming ideas into meaningful digital
              experiences through creativity and technology.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Us?
          </h2>
          <p className="text-slate-500 mt-3">
            We focus on quality, creativity and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['⚡', 'Fast Performance', 'Optimized solutions for better performance.'],
            ['🎨', 'Modern Design', 'Beautiful and user-friendly experiences.'],
            ['🛡️', 'Reliable Support', 'We care about quality and reliability.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-500 leading-7">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home