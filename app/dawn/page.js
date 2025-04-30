import Image from "next/image"
import Link from "next/link"

export default function DawnPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#fff5e6] to-[#fff9f0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#f1a33c]">Dawn</span> - The Start of a Bright Journey
              </h1>
              <p className="text-lg text-gray-700">
                An early education program designed specifically for pre-primary students, nurturing curiosity and
                laying the foundation for future learning.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#f1a33c] hover:bg-[#e09730] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Dawn Program"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nurturing Young Minds</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff5e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Playful Learning</h3>
              <p className="text-gray-600">
                Activity-based curriculum that makes learning fun and engaging for young children
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff5e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Foundational Skills</h3>
              <p className="text-gray-600">
                Development of essential literacy, numeracy, and social skills through structured activities
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff5e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
              <p className="text-gray-600">
                Balanced focus on cognitive, physical, emotional, and social development of children
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Curriculum Overview</h2>
            <p className="text-gray-600">
              Dawn's curriculum is specially designed for pre-primary students, focusing on developing essential skills
              through engaging activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#f1a33c] text-white p-4">
                <h3 className="text-xl font-bold">Literacy & Language</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Alphabet Recognition</h4>
                    <p className="text-sm text-gray-600">Fun activities to identify and learn letters</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Phonics Development</h4>
                    <p className="text-sm text-gray-600">Learning letter sounds through songs and stories</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Vocabulary Building</h4>
                    <p className="text-sm text-gray-600">Interactive activities to expand word knowledge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#f1a33c] text-white p-4">
                <h3 className="text-xl font-bold">Numeracy & Logic</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Number Recognition</h4>
                    <p className="text-sm text-gray-600">Identifying and understanding numbers 1-20</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Basic Counting</h4>
                    <p className="text-sm text-gray-600">Counting objects and understanding quantity</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Shapes & Patterns</h4>
                    <p className="text-sm text-gray-600">Recognizing shapes and identifying patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#f1a33c] text-white p-4">
                <h3 className="text-xl font-bold">Creativity & Expression</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Art & Craft</h4>
                    <p className="text-sm text-gray-600">Expressing creativity through various art mediums</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Music & Movement</h4>
                    <p className="text-sm text-gray-600">Rhythmic activities that enhance motor skills</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Dramatic Play</h4>
                    <p className="text-sm text-gray-600">Role-playing activities that develop social skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#f1a33c] text-white p-4">
                <h3 className="text-xl font-bold">World Discovery</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Natural Science</h4>
                    <p className="text-sm text-gray-600">Exploring plants, animals, and natural phenomena</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Community Awareness</h4>
                    <p className="text-sm text-gray-600">Learning about helpers and community roles</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#f1a33c] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Cultural Exposure</h4>
                    <p className="text-sm text-gray-600">Introduction to diverse cultures and traditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg"
                alt="Dawn Learning Materials"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold">Comprehensive Learning Materials</h2>
              <p className="text-gray-700">
                Dawn provides a complete set of learning materials to support the curriculum implementation in schools:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Colorful student workbooks with engaging activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Comprehensive teacher guides with lesson plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Manipulatives and hands-on learning tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Animated digital content and stories</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff5e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f1a33c" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Assessment tools to track developmental progress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#fff5e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Educators Say About Dawn</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#f1a33c]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Dawn's curriculum perfectly balances play and learning. Our pre-primary students are engaged and
                excited about coming to school every day. The comprehensive materials make implementation easy."
              </p>
              <div>
                <p className="font-medium">Mrs. Kavita Sharma</p>
                <p className="text-sm text-gray-600">Pre-Primary Coordinator</p>
                <p className="text-sm text-gray-600">Sunshine Kids School, Mumbai</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#f1a33c]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Parents are extremely happy with the progress their children are making with Dawn. The program has
                significantly improved our students' readiness for primary education."
              </p>
              <div>
                <p className="font-medium">Mr. Rajiv Malhotra</p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">Little Angels School, Delhi</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#f1a33c]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The teacher training and support from the Uolo team has been exceptional. Dawn is not just a curriculum
                but a complete early education solution."
              </p>
              <div>
                <p className="font-medium">Mrs. Lakshmi Nair</p>
                <p className="text-sm text-gray-600">Pre-Primary Head</p>
                <p className="text-sm text-gray-600">Global Kids Academy, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#f1a33c] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to start a bright journey with your students?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already providing their pre-primary students with the best
              foundation for learning with Dawn.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#f1a33c] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
