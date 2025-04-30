import Image from "next/image"
import Link from "next/link"

export default function ImaginePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#e6fffa] to-[#f0fffd]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#38b2ac]">Imagine</span> - Mathematics Excellence
              </h1>
              <p className="text-lg text-gray-700">
                Comprehensive mathematics program designed to develop strong numerical skills and problem-solving
                abilities in students from grades 1-8.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#38b2ac] hover:bg-[#319795] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Imagine Mathematics Program"
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
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Mathematics Development</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6fffa] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Number Sense</h3>
              <p className="text-gray-600">Develop strong understanding of numbers and operations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6fffa] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="2">
                  <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Geometry</h3>
              <p className="text-gray-600">Explore shapes, measurements, and spatial relationships</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6fffa] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Algebra</h3>
              <p className="text-gray-600">Build foundations for algebraic thinking and problem-solving</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6fffa] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
              <p className="text-gray-600">Learn to collect, organize, and interpret data effectively</p>
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
              Imagine's curriculum is designed to develop comprehensive mathematical skills through a structured and
              engaging approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#38b2ac] text-white p-4">
                <h3 className="text-xl font-bold">Lower Primary (Grades 1-3)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Number Concepts</h4>
                    <p className="text-sm text-gray-600">Understanding numbers, counting, and basic operations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Basic Shapes and Measurements</h4>
                    <p className="text-sm text-gray-600">Identifying shapes and understanding basic measurements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Patterns and Relationships</h4>
                    <p className="text-sm text-gray-600">Recognizing and creating patterns</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Basic Problem Solving</h4>
                    <p className="text-sm text-gray-600">Simple word problems and logical thinking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#38b2ac] text-white p-4">
                <h3 className="text-xl font-bold">Upper Primary (Grades 4-5)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Operations</h4>
                    <p className="text-sm text-gray-600">Multiplication, division, and fractions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Geometry and Measurement</h4>
                    <p className="text-sm text-gray-600">Area, perimeter, and geometric properties</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Data Representation</h4>
                    <p className="text-sm text-gray-600">Creating and interpreting graphs and charts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Pre-Algebraic Concepts</h4>
                    <p className="text-sm text-gray-600">Variables, expressions, and equations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#38b2ac] text-white p-4">
                <h3 className="text-xl font-bold">Middle School (Grades 6-8)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Algebra</h4>
                    <p className="text-sm text-gray-600">Linear equations, inequalities, and functions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Geometry</h4>
                    <p className="text-sm text-gray-600">Coordinate geometry and transformations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Statistics and Probability</h4>
                    <p className="text-sm text-gray-600">Data analysis, central tendency, and basic probability</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Problem Solving</h4>
                    <p className="text-sm text-gray-600">Complex word problems and mathematical reasoning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#38b2ac] text-white p-4">
                <h3 className="text-xl font-bold">Assessment & Evaluation</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Formative Assessments</h4>
                    <p className="text-sm text-gray-600">Regular quizzes and classroom activities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Summative Assessments</h4>
                    <p className="text-sm text-gray-600">End-of-unit tests and projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Problem-Solving Challenges</h4>
                    <p className="text-sm text-gray-600">Math competitions and challenges</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center mt-0.5">
                    <span className="text-[#38b2ac] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Assessment</h4>
                    <p className="text-sm text-gray-600">Projects and mathematical investigations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/placeholder.svg"
                alt="Imagine Teaching Materials"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Comprehensive Teaching Materials</h2>
              <p className="text-gray-700">
                Imagine provides a complete set of teaching materials to support effective mathematics instruction:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Student textbooks with clear explanations and examples</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Workbooks with practice problems and exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Teacher guides with detailed lesson plans and teaching strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Manipulatives and hands-on learning tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6fffa] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38b2ac" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Digital resources including interactive activities and assessment tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#e6fffa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Schools Say About Imagine</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#38b2ac]">
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
                "Imagine has transformed our mathematics program. The structured approach and engaging materials have
                made math more accessible and enjoyable for our students. We've seen significant improvement in test
                scores."
              </p>
              <div>
                <p className="font-medium">Dr. Rajiv Mehta</p>
                <p className="text-sm text-gray-600">Mathematics Department Head</p>
                <p className="text-sm text-gray-600">Central Academy, Jaipur</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#38b2ac]">
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
                "The hands-on approach of Imagine has helped our students develop a deeper understanding of mathematical
                concepts. The teacher resources are excellent and have made planning and instruction much more
                effective."
              </p>
              <div>
                <p className="font-medium">Mrs. Lakshmi Iyer</p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">New Horizon School, Bangalore</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#38b2ac]">
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
                "Parents have noticed a significant improvement in their children's math skills and confidence since we
                implemented Imagine. The program's focus on problem-solving has been particularly beneficial."
              </p>
              <div>
                <p className="font-medium">Mr. Sanjay Patel</p>
                <p className="text-sm text-gray-600">Academic Coordinator</p>
                <p className="text-sm text-gray-600">Excel Public School, Ahmedabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#38b2ac] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to transform mathematics learning in your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already providing their students with a comprehensive
              mathematics program through Imagine.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#38b2ac] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
