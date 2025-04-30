import Image from "next/image"
import Link from "next/link"

export default function TekiePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#201c3a] text-white py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#201c3a] to-[#2d2a4a] opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Computer Science <span className="text-[#6c5ce7]">decoded</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Empower students with essential coding and computer science skills through our interactive curriculum
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/request-demo"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-6 py-3 font-medium"
                >
                  Request Demo
                </Link>
                <Link
                  href="/tekie/curriculum"
                  className="bg-white text-[#6c5ce7] hover:bg-gray-100 transition-colors rounded-md px-6 py-3 font-medium"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Tekie Computer Science Program"
                width={500}
                height={500}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Tekie is the perfect coding program for your school
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Interactive Learning</h3>
              <p className="text-center text-gray-600">
                Animated lessons and interactive coding exercises keep students engaged and enthusiastic about learning
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Progressive Curriculum</h3>
              <p className="text-center text-gray-600">
                Carefully designed curriculum that builds skills step-by-step from basic concepts to advanced
                programming
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Real-world Projects</h3>
              <p className="text-center text-gray-600">
                Students apply their knowledge by building actual projects that solve real-world problems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Coding Curriculum</h2>
            <p className="text-gray-600">
              Our curriculum covers everything from basic computer science concepts to advanced programming techniques,
              all presented in an age-appropriate and engaging way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#6c5ce7] text-white p-4">
                <h3 className="text-xl font-bold">Grades 1-3</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Introduction to Computers</h4>
                    <p className="text-sm text-gray-600">Basic computer parts and functions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Visual Block Coding</h4>
                    <p className="text-sm text-gray-600">Developing logic through puzzles and games</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Digital Storytelling</h4>
                    <p className="text-sm text-gray-600">Creating interactive stories with code</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#6c5ce7] text-white p-4">
                <h3 className="text-xl font-bold">Grades 4-8</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Introduction to Programming</h4>
                    <p className="text-sm text-gray-600">Basic programming concepts and syntax</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-sm text-gray-600">Building websites with HTML, CSS, and JavaScript</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">App Development</h4>
                    <p className="text-sm text-gray-600">Creating mobile applications with block-based platforms</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] flex items-center justify-center mt-0.5">
                    <span className="text-[#6c5ce7] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Game Development</h4>
                    <p className="text-sm text-gray-600">Building interactive games with programming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#f3efff] rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What schools say about Tekie</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="italic text-gray-700 mb-4">
                    "Tekie has a futuristic curriculum that will help students to know more about computers and basics
                    of coding. Tekie's team is highly cooperative to solve any queries and is ready to help us."
                  </p>
                  <div>
                    <p className="font-medium">Mrs. Feroza</p>
                    <p className="text-sm text-gray-600">Prestige International School,</p>
                    <p className="text-sm text-gray-600">Bhopal</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Students learning coding"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Tekie in Action</h2>
            <p className="text-gray-600">
              Watch how students engage with our interactive coding platform and build amazing projects
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#6c5ce7" stroke="none">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Coding Made Fun and Simple</h3>
              <p className="text-gray-600">
                Our interactive lessons make coding accessible to students of all skill levels. Watch how students build
                their first web page in just one session!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">500+</h3>
              <p className="text-gray-600">Schools</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">100K+</h3>
              <p className="text-gray-600">Students</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">5K+</h3>
              <p className="text-gray-600">Projects Created</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">97%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#6c5ce7] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to bring coding education to your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already preparing their students for the digital future
              with Tekie.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#6c5ce7] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
