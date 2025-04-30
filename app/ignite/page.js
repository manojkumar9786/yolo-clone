import Image from "next/image"
import Link from "next/link"

export default function IgnitePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#fff0e6] to-[#fff5f0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-[#ed8936]">Ignite</span> - English Language Excellence
              </h1>
              <p className="text-lg text-gray-700">
                Comprehensive English language program designed to develop strong communication skills in students from
                grades 1-8.
              </p>
              <Link
                href="/request-demo"
                className="bg-[#ed8936] hover:bg-[#dd6b20] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Ignite English Program"
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
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive English Language Development</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reading</h3>
              <p className="text-gray-600">
                Develop strong reading comprehension skills through engaging texts and activities
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Speaking</h3>
              <p className="text-gray-600">
                Build confidence in spoken English through interactive exercises and activities
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Writing</h3>
              <p className="text-gray-600">
                Develop strong writing skills through structured exercises and creative assignments
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="2">
                  <path d="M2 2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v20l-10-5-10 5V2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Grammar</h3>
              <p className="text-gray-600">
                Master English grammar through engaging activities and practical applications
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
              Ignite's curriculum is designed to develop comprehensive English language skills through a structured and
              engaging approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#ed8936] text-white p-4">
                <h3 className="text-xl font-bold">Lower Primary (Grades 1-3)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Phonics and Word Recognition</h4>
                    <p className="text-sm text-gray-600">Building foundational reading skills</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Basic Grammar and Sentence Structure</h4>
                    <p className="text-sm text-gray-600">Learning to form simple sentences</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Vocabulary Building</h4>
                    <p className="text-sm text-gray-600">Expanding word knowledge through stories and activities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Listening and Speaking</h4>
                    <p className="text-sm text-gray-600">Developing basic communication skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#ed8936] text-white p-4">
                <h3 className="text-xl font-bold">Upper Primary (Grades 4-5)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Reading Comprehension</h4>
                    <p className="text-sm text-gray-600">Understanding and analyzing various text types</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Intermediate Grammar</h4>
                    <p className="text-sm text-gray-600">Parts of speech, tenses, and sentence types</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Writing Skills</h4>
                    <p className="text-sm text-gray-600">Paragraphs, short essays, and creative writing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Oral Communication</h4>
                    <p className="text-sm text-gray-600">Presentations, discussions, and debates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#ed8936] text-white p-4">
                <h3 className="text-xl font-bold">Middle School (Grades 6-8)</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Reading</h4>
                    <p className="text-sm text-gray-600">Critical analysis of literature and informational texts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Grammar</h4>
                    <p className="text-sm text-gray-600">Complex sentence structures and usage</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Essay Writing</h4>
                    <p className="text-sm text-gray-600">Argumentative, narrative, and expository writing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Public Speaking</h4>
                    <p className="text-sm text-gray-600">Formal presentations and debate skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#ed8936] text-white p-4">
                <h3 className="text-xl font-bold">Assessment & Evaluation</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Formative Assessments</h4>
                    <p className="text-sm text-gray-600">Regular quizzes and classroom activities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Summative Assessments</h4>
                    <p className="text-sm text-gray-600">End-of-unit tests and projects</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Portfolio Assessment</h4>
                    <p className="text-sm text-gray-600">Collection of student work showing progress</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center mt-0.5">
                    <span className="text-[#ed8936] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Assessment</h4>
                    <p className="text-sm text-gray-600">Speaking and presentation evaluations</p>
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
                alt="Ignite Teaching Materials"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Comprehensive Teaching Materials</h2>
              <p className="text-gray-700">
                Ignite provides a complete set of teaching materials to support effective English language instruction:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Student textbooks with engaging content and activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Workbooks for practice and reinforcement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Teacher guides with detailed lesson plans and teaching strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Digital resources including audio, video, and interactive activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fff0e6] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ed8936" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Assessment tools including tests, quizzes, and rubrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#fff0e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Schools Say About Ignite</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#ed8936]">
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
                "Ignite has transformed our English language program. Students are more engaged and their communication
                skills have improved significantly. The comprehensive materials make teaching effective and enjoyable."
              </p>
              <div>
                <p className="font-medium">Mrs. Meera Gupta</p>
                <p className="text-sm text-gray-600">English Department Head</p>
                <p className="text-sm text-gray-600">Delhi Public School, Noida</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#ed8936]">
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
                "The structured approach of Ignite has helped our students build strong foundations in English. The
                digital resources are particularly engaging and have made learning more interactive."
              </p>
              <div>
                <p className="font-medium">Mr. Thomas Philip</p>
                <p className="text-sm text-gray-600">Principal</p>
                <p className="text-sm text-gray-600">St. Mary's School, Kochi</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <div className="flex text-[#ed8936]">
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
                "Parents have noticed a significant improvement in their children's English skills since we implemented
                Ignite. The comprehensive assessment tools help us track progress and provide targeted support."
              </p>
              <div>
                <p className="font-medium">Mrs. Anjali Desai</p>
                <p className="text-sm text-gray-600">Academic Coordinator</p>
                <p className="text-sm text-gray-600">Bright Future School, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#ed8936] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to ignite English language learning in your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join hundreds of schools across India that are already providing their students with a comprehensive
              English language program through Ignite.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#ed8936] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
