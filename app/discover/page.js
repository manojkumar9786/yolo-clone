import Image from "next/image"
import Link from "next/link"

export default function DiscoverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#e6f7ff] to-[#f0faff]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#0ea5e9]">Discover</span> - Environmental Studies
              </h1>
              <p className="text-lg text-gray-700">
                Comprehensive EVS program designed to develop environmental awareness and scientific inquiry skills in
                students from grades 1-5.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#0ea5e9] hover:bg-[#0284c7] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Discover EVS Program"
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
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Environmental Studies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Environment</h3>
              <p className="text-gray-600">
                Explore plants, animals, and natural phenomena through engaging activities
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Environment</h3>
              <p className="text-gray-600">Learn about family, community, and social relationships</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Scientific Inquiry</h3>
              <p className="text-gray-600">Develop observation, experimentation, and critical thinking skills</p>
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
              Discover's curriculum is designed to develop environmental awareness and scientific inquiry skills through
              a structured and engaging approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#0ea5e9] text-white p-4">
                <h3 className="text-xl font-bold">Lower Primary (Grades 1-2)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Me and My Family</h4>
                    <p className="text-sm text-gray-600">Understanding self, family, and relationships</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Plants and Animals</h4>
                    <p className="text-sm text-gray-600">Basic understanding of living things</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Food and Shelter</h4>
                    <p className="text-sm text-gray-600">Basic needs of living things</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Weather and Seasons</h4>
                    <p className="text-sm text-gray-600">Observing and understanding seasonal changes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#0ea5e9] text-white p-4">
                <h3 className="text-xl font-bold">Upper Primary (Grades 3-5)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Community and Society</h4>
                    <p className="text-sm text-gray-600">Understanding social structures and relationships</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Ecosystems</h4>
                    <p className="text-sm text-gray-600">Exploring habitats and interdependence</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Natural Resources</h4>
                    <p className="text-sm text-gray-600">Understanding and conserving resources</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Environmental Conservation</h4>
                    <p className="text-sm text-gray-600">Developing awareness and responsibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#0ea5e9] text-white p-4">
                <h3 className="text-xl font-bold">Scientific Skills</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Observation</h4>
                    <p className="text-sm text-gray-600">Developing keen observation skills</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Classification</h4>
                    <p className="text-sm text-gray-600">Sorting and categorizing objects and phenomena</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Experimentation</h4>
                    <p className="text-sm text-gray-600">Conducting simple experiments</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Communication</h4>
                    <p className="text-sm text-gray-600">Expressing findings and ideas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#0ea5e9] text-white p-4">
                <h3 className="text-xl font-bold">Assessment & Activities</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Hands-on Activities</h4>
                    <p className="text-sm text-gray-600">Practical experiments and projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Field Trips</h4>
                    <p className="text-sm text-gray-600">Exploring the environment firsthand</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Project-Based Learning</h4>
                    <p className="text-sm text-gray-600">Collaborative environmental projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center mt-0.5">
                    <span className="text-[#0ea5e9] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Formative Assessments</h4>
                    <p className="text-sm text-gray-600">Regular quizzes and activities</p>
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
                alt="Discover Teaching Materials"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Comprehensive Teaching Materials</h2>
              <p className="text-gray-700">
                Discover provides a complete set of teaching materials to support effective environmental studies
                instruction:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Student textbooks with engaging content and illustrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Activity books with hands-on experiments and projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Teacher guides with detailed lesson plans and teaching strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Digital resources including videos, animations, and interactive activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Assessment tools including observation checklists and project rubrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#e6f7ff]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Schools Say About Discover</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#0ea5e9]">
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
                "Discover has transformed our EVS program. The hands-on approach and engaging materials have made
                environmental studies come alive for our students. They are now more aware and concerned about their
                environment."
              </p>
              <div>
                <p className="font-medium">Mrs. Priya Sharma</p>
                <p className="text-sm text-gray-600">Primary Coordinator</p>
                <p className="text-sm text-gray-600">Green Valley School, Delhi</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#0ea5e9]">
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
                "The project-based approach of Discover has helped our students develop not just knowledge but also
                practical skills and environmental values. The teacher resources are excellent and well-structured."
              </p>
              <div>
                <p className="font-medium">Mr. Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">Bright Future School, Mumbai</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#0ea5e9]">
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
                "Parents have noticed a significant improvement in their children's awareness and concern for the
                environment since we implemented Discover. The digital resources are particularly engaging."
              </p>
              <div>
                <p className="font-medium">Mrs. Lakshmi Nair</p>
                <p className="text-sm text-gray-600">EVS Coordinator</p>
                <p className="text-sm text-gray-600">Global Kids Academy, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#0ea5e9] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to transform environmental studies in your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already providing their students with a comprehensive
              environmental studies program through Discover.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#0ea5e9] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
