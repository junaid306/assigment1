function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message submitted successfully!')
  }

  return (
    <main>
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h1>
          <p className="text-blue-100 mt-4">
            Have a question? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-5">
            Let's Talk
          </h2>

          <p className="text-slate-500 leading-8 mb-10">
            Send us a message. Our team will be happy
            to help you with your questions.
          </p>

          <div className="space-y-7">
            {[
              ['📧', 'Email Address', 'hello@example.com'],
              ['📞', 'Phone Number', '+880 1234-567890'],
              ['📍', 'Our Location', 'Dhaka, Bangladesh'],
            ].map(([icon, title, value]) => (
              <div key={title} className="flex items-center gap-5">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-500 mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-7">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message →
            </button>
          </form>
        </div>

      </section>
    </main>
  )
}

export default Contact