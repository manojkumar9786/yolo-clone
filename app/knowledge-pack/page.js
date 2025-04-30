import Image from "next/image"
import Link from "next/link"

export default function KnowledgePackPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#f0faff]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Essential <span className="text-[#4299e1]">Knowledge Pack</span>
              </h1>
              <p className="text-lg text-gray-700">
                All core subjects in one easy-to-access pack, designed to provide comprehensive learning for grades 1-8.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#4299e1] hover:bg-[#3182ce] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Knowledge Pack"
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
          <h2 className="text-3xl font-bold text-center mb-12">Complete Learning Solution</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Covers all core subjects including English, Mathematics, Science, and Social Studies
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Engaging digital content and activities that make learning fun and effective
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment Tools</h3>
              <p className="text-gray-600">
                Comprehensive assessment system to track student progress and identify areas for improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subjects Covered</h2>
            <p className="text-gray-600">
              The Knowledge Pack provides comprehensive coverage of all core subjects with age-appropriate content for
              each grade level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-3 bg-[#4299e1]"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#e6f7ff] rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">English</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reading comprehension</li>
                  <li>• Grammar and vocabulary</li>
                  <li>• Writing skills</li>
                  <li>• Literature appreciation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-3 bg-[#4299e1]"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#e6f7ff] rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                    <line x1="18" y1="2" x2="22" y2="6"></line>
                    <path d="M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mathematics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Number systems</li>
                  <li>• Algebra and geometry</li>
                  <li>• Data handling</li>
                  <li>• Problem-solving skills</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-3 bg-[#4299e1]"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#e6f7ff] rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Science</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Physical sciences</li>
                  <li>• Life sciences</li>
                  <li>• Environmental studies</li>
                  <li>• Scientific inquiry</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-3 bg-[#4299e1]"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#e6f7ff] rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2">
                    <path d="M3 21h18"></path>
                    <path d="M3 10h18"></path>
                    <path d="M5 6l7-3 7 3"></path>
                    <path d="M4 10v11"></path>
                    <path d="M20 10v11"></path>
                    <path d="M8 14v3"></path>
                    <path d="M12 14v6"></path>
                    <path d="M16 14v3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Social Studies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• History and civics</li>
                  <li>• Geography</li>
                  <li>• Cultural studies</li>
                  <li>• Current affairs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Materials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Complete Learning Materials</h2>
              <p className="text-gray-700">
                The Knowledge Pack includes everything teachers and students need for effective learning:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Comprehensive student textbooks for all subjects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Workbooks with practice exercises and activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Detailed teacher guides with lesson plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Digital content including animations and interactive exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Assessment tools and question banks</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Knowledge Pack Materials"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#e6f7ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Schools Say About Knowledge Pack</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#4299e1]">
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
                "The Knowledge Pack has transformed our curriculum delivery. The comprehensive materials and digital
                content have made teaching more effective and learning more engaging for our students."
              </p>
              <div>
                <p className="font-medium">Dr. Anand Sharma</p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">Modern Public School, Jaipur</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#4299e1]">
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
                "Our teachers love the detailed lesson plans and resources provided in the Knowledge Pack. It has
                significantly reduced their preparation time while improving the quality of instruction."
              </p>
              <div>
                <p className="font-medium">Mrs. Sunita Patel</p>
                <p className="text-sm text-gray-600">Academic Coordinator</p>
                <p className="text-sm text-gray-600">Excel Academy, Ahmedabad</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#4299e1]">
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
                "The assessment tools in the Knowledge Pack have helped us identify learning gaps and provide targeted
                support to students. We've seen a significant improvement in academic performance."
              </p>
              <div>
                <p className="font-medium">Mr. Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Vice Principal</p>
                <p className="text-sm text-gray-600">Heritage School, Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#4299e1] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to enhance your school's curriculum?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already providing their students with a comprehensive
              learning experience through the Knowledge Pack.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#4299e1] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
