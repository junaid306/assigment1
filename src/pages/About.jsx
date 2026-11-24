import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="bg-white">
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold">WHO WE ARE</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            About Our Company
          </h1>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto leading-8">
            We believe technology can make life simpler,
            smarter and better for everyone.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white min-h-80 flex flex-col justify-center">
          <div className="text-6xl mb-6">💡</div>
          <h2 className="text-3xl font-bold mb-4">
            Turning Ideas Into Reality
          </h2>
          <p className="text-blue-100 leading-7">
            Creativity and technology come together
            to create something meaningful.
          </p>
        </div>

        <div>
          <span className="text-blue-600 font-semibold">OUR STORY</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-6">
            We Create Digital Experiences
          </h2>
          <p className="text-slate-600 leading-8 mb-5">
            Our goal is to provide modern digital solutions
            that solve real-world problems.
          </p>
          <p className="text-slate-600 leading-8 mb-8">
            We focus on continuous improvement, creativity
            and delivering a better experience.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            ['100+', 'Projects'],
            ['50+', 'Clients'],
            ['20+', 'Experts'],
            ['5+', 'Years Experience'],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="text-4xl font-bold text-blue-400">{number}</h3>
              <p className="text-slate-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About