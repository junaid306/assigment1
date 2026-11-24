const services = [
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Modern, responsive and professional websites for your business.',
    color: 'bg-blue-100',
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Powerful mobile applications with user-friendly interfaces.',
    color: 'bg-purple-100',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful and intuitive designs for better user experiences.',
    color: 'bg-pink-100',
  },
  {
    icon: '⚙️',
    title: 'Software Solutions',
    desc: 'Custom software solutions to simplify your workflow.',
    color: 'bg-amber-100',
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    desc: 'Improve your website visibility and search performance.',
    color: 'bg-green-100',
  },
  {
    icon: '🛠️',
    title: 'Technical Support',
    desc: 'Reliable technical assistance and ongoing support.',
    color: 'bg-cyan-100',
  },
]

function Services() {
  return (
    <main>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-400 font-semibold">WHAT WE OFFER</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Our Services
          </h1>
          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            Explore our professional services and discover
            how we can help bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {service.icon}
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h2>

              <p className="text-slate-500 leading-7">
                {service.desc}
              </p>

              <div className="mt-6 text-blue-600 font-semibold">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Services