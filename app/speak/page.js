import Link from "next/link"
import VideoSection from "@/components/video-section"

export default function SpeakPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How does <span className="text-[#a788ff]">Speak</span> help your school?
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Engage your students with a comprehensive English speaking program
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/request-demo"
                className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
              <Link
                href="/speak/curriculum"
                className="bg-white text-[#6c5ce7] hover:bg-gray-100 transition-colors rounded-md px-6 py-3 font-medium"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Speaking</h3>
              <p className="text-gray-600">Engaging activities to help students build confidence in spoken English</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Learning</h3>
              <p className="text-gray-600">Mobile app with quizzes and interactive exercises for practice</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#f3efff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
              <p className="text-gray-600">Detailed progress reports for both teachers and parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gray-200">
                  <iframe
                    width="100%"
                    height="100%"
                    src="about:blank"
                    title="Principal Testimonial"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <h2 className="text-3xl font-bold mb-4">Speak transforms classrooms</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from school principals about how the Speak program has improved students' communication skills and
                classroom participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Speak program's excellence is rooted in practical implementation across
              <span className="text-[#6c5ce7]"> 1500+ Indian schools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">1500+</h3>
              <p className="text-gray-600">Schools</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">500K+</h3>
              <p className="text-gray-600">Students</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">20K+</h3>
              <p className="text-gray-600">Teachers</p>
            </div>

            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#6c5ce7] mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Showcase</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <VideoSection name="Ashwin" class="6" thumbnail="/placeholder.svg" videoUrl="/video1.mp4" />
            <VideoSection name="Sumit" class="7" thumbnail="/placeholder.svg" videoUrl="/video2.mp4" />
            <VideoSection name="Kanika" class="3" thumbnail="/placeholder.svg" videoUrl="/video3.mp4" />
            <VideoSection name="Mankirat" class="1" thumbnail="/placeholder.svg" videoUrl="/video4.mp4" />
            <VideoSection name="Danish" class="5" thumbnail="/placeholder.svg" videoUrl="/video5.mp4" />
            <VideoSection name="Ram Harish" class="8" thumbnail="/placeholder.svg" videoUrl="/video6.mp4" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#6c5ce7] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to implement Speak in your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of schools across India that are already improving their students' English speaking skills
              with Uolo's Speak program.
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
