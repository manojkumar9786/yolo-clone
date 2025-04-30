import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f9fe] to-[#ebe6ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-[#6c5ce7]">Uolo</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Transforming education through innovative learning solutions and comprehensive school management systems
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg"
                alt="Uolo Mission"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To empower schools with innovative learning solutions and management tools that enhance educational
                  outcomes and operational efficiency. We aim to create a seamless ecosystem where educators, students,
                  and parents collaborate effectively for holistic development.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be the leading educational technology partner for schools across India, revolutionizing the way
                  education is delivered and managed. We envision a future where every school has access to world-class
                  educational resources and management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Uolo was founded in 2013 with a simple yet powerful vision: to transform education through technology.
                Our founders, experienced educators and technology experts, recognized the challenges faced by schools
                in delivering quality education and managing operations efficiently.
              </p>

              <p>
                Starting with a small team and a handful of partner schools, we developed our first school management
                platform. The positive response from schools encouraged us to expand our offerings to include
                comprehensive learning programs across various subjects.
              </p>

              <p>
                Over the years, we have grown to serve over 1,500 schools across India, impacting the lives of more than
                500,000 students. Our team has expanded to include passionate educators, curriculum experts, software
                developers, and support staff, all united by the common goal of enhancing educational outcomes.
              </p>

              <p>
                Today, Uolo offers a complete ecosystem of educational solutions, from innovative learning programs like
                Speak and Tekie to comprehensive school management platforms. We continue to innovate and evolve, guided
                by feedback from our partner schools and the latest developments in educational research and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from curriculum development to customer support. We
                continuously improve our products and services based on feedback and research.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration between educators, students, parents, and technology. Our
                solutions are designed to foster effective communication and teamwork.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously explore new technologies and methodologies to enhance the
                educational experience. We stay ahead of trends to provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg" alt="CEO" width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Rajiv Sharma</h3>
                <p className="text-[#6c5ce7] mb-4">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in education and technology, Rajiv leads Uolo's vision and strategy.
                  He is passionate about transforming education through innovation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg" alt="CTO" width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-[#6c5ce7] mb-4">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Priya oversees Uolo's technology development and innovation. With a background in computer science and
                  education, she ensures our platforms are robust, user-friendly, and effective.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder.svg" alt="COO" width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Amit Verma</h3>
                <p className="text-[#6c5ce7] mb-4">Chief Academic Officer</p>
                <p className="text-gray-600 text-sm">
                  Amit leads our curriculum development and academic initiatives. With extensive experience in
                  educational research and pedagogy, he ensures our learning programs meet the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">1500+</h3>
              <p className="text-gray-600">Partner Schools</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">500K+</h3>
              <p className="text-gray-600">Students Impacted</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">20K+</h3>
              <p className="text-gray-600">Teachers Empowered</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">25+</h3>
              <p className="text-gray-600">States Across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-[#6c5ce7]">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Uolo Family</h2>
            <p className="mb-8">
              Whether you're a school looking for innovative solutions or a passionate professional seeking to make an
              impact in education, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/request-demo"
                className="bg-white text-[#6c5ce7] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
              >
                Partner with Us
              </Link>
              <Link
                href="/careers"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-[#6c5ce7] transition-colors inline-block rounded-md px-8 py-3 font-medium"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
