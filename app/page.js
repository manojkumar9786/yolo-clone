"use client"
import Image from "next/image"
import Link from "next/link"
import ProgramCard from "@/components/program-card"
import InfiniteCarousel from "@/components/infinite-carousel"
import VideoSection from "@/components/video-section"
import Tabs from "@/components/tabs"

export default function Home() {
  const programs = [
    {
      title: "Dawn",
      description: "The Start of a Bright Journey",
      grades: "For Grades Pre-Primary",
      image: "https://www.uolo.com/images/our-product-tekie.png",
    },
    {
      title: "Tekie",
      description: "Computer Science decoded",
      grades: "For Grades 1-8",
      image: "https://www.uolo.com/images/our-product-tekie.png",
    },
    {
      title: "Speak",
      description: "Engage the world with fluent spoken English",
      grades: "For Grades 1-8",
      image: "https://www.uolo.com/images/our-product-tekie.png",
    },
    {
      title: "Knowledge Pack",
      description: "All core subjects in one easy-to-access pack",
      grades: "For Grades 1-8",
      image: "https://www.uolo.com/images/our-product-tekie.png",
    },
  ]

  const managementTabs = [
    {
      label: "Attendance",
      content: (
        <div className="bg-[#ebe6ff] dark:bg-[#1e293b] rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://www.uolo.com/images/attendence-icon.svg"
                alt="Attendance dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Take Attendance via app or web in 30 seconds</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Share attendance updates with parents</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6c5ce7] dark:bg-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="font-medium dark:text-white">ICSE/CBSE aligned reports available for downloads</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Fees",
      content: (
        <div className="bg-[#e6f7ff] dark:bg-[#1e293b] rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://www.uolo.com/images/fees-icon.svg"
                alt="Fees dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Online fee collection with multiple payment options</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Automatic receipt generation and reconciliation</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6c5ce7] dark:bg-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="font-medium dark:text-white">Comprehensive financial dashboard for management</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Communication",
      content: (
        <div className="bg-[#f3efff] dark:bg-[#1e293b] rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://www.uolo.com/images/chat-home.svg"
                alt="Communication dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Send homework and class notes right from the app</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Broadcast announcements to all parents</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6c5ce7] dark:bg-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="font-medium dark:text-white">Direct messaging between teachers and parents</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Report Card",
      content: (
        <div className="bg-[#fff5e6] dark:bg-[#1e293b] rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://www.uolo.com/images/report-card.svg"
                alt="Report Card dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Generate customizable report cards</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#6c5ce7] dark:border-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Share digital report cards with parents instantly</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6c5ce7] dark:bg-[#a78bfa] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="font-medium dark:text-white">Track student progress over multiple terms</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#f8f9fe] dark:bg-[#0a1128] opacity-80"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#ebe6ff] dark:bg-[#1e293b] blur-3xl opacity-70"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#e6eeff] dark:bg-[#1e293b] blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 slide-in-left h-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Set up your students for success!</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Help build essential skills with our scholastic programs
              </p>
              <Link
                href="/request-demo"
                className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
            <div className="flex justify-center slide-in-right">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero-gnrsSVC8iUBZVevzI8kqA0oJULGHmY.png"
                alt="Happy students"
                width={600}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 slide-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Uolo revolutionises the school system with learning programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                grades={program.grades}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            How does Uolo help <span className="text-[#6c5ce7] dark:text-[#a78bfa]">manage</span> your school?
          </h2>

          <div className="max-w-3xl mx-auto mt-12">
            <Tabs tabs={managementTabs} />
          </div>
        </div>
      </section>

      {/* Administrative Control Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Empowering schools with{" "}
                <span className="text-[#6c5ce7] dark:text-[#a78bfa]">administrative control</span> of routine activities
              </h2>
              <Link
                href="/request-demo"
                className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request demo
              </Link>
            </div>
            <div className="flex justify-center slide-in-right">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/admin-dashboard-Yx9Yd9Yx9Yd9.png"
                alt="Administrative dashboard"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Hear from our partner schools</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Uolo has helped thousands of schools become more efficient
          </p>

          <InfiniteCarousel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-[#f3efff] dark:bg-[#1e293b] p-6 rounded-xl testimonial-card w-[300px]">
                <div className="testimonial-content">
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] font-medium mb-2">On Speak</p>
                  <p className="text-sm mb-4">
                    Speak's classroom activities draw big participation from students and they equally love the quizzes
                    on app. The detailed performance reports help us keep a track of students' progress.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <p className="font-medium">Mrs. Shivani Kashyap,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Anand Public School,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pune</p>
                </div>
              </div>

              <div className="bg-[#e6f7ff] dark:bg-[#1e293b] p-6 rounded-xl testimonial-card w-[25%]">
                <div className="testimonial-content">
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] font-medium mb-2">On Tekie</p>
                  <p className="text-sm mb-4">
                    Tekie has a futuristic curriculum that will help students to know more about computers and basics of
                    coding. Tekie's team is highly cooperative to solve any queries and is ready to help us.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <p className="font-medium">Mrs. Feroza</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Prestige International School,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bhopal</p>
                </div>
              </div>

              <div className="bg-[#e6f7ff] dark:bg-[#1e293b] p-6 rounded-xl testimonial-card w-[25%]">
                <div className="testimonial-content">
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] font-medium mb-2">On Manage</p>
                  <p className="text-sm mb-4">
                    Through the chat feature, we can send homework and class notes right from our mobile app. It helps
                    us keep parents informed on their child's attendance and participation in class.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <p className="font-medium">Mrs. Radhika Goyal,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Kidsland Public School,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nagaur</p>
                </div>
              </div>

              <div className="bg-[#f3efff] dark:bg-[#1e293b] p-6 rounded-xl testimonial-card w-[25%]">
                <div className="testimonial-content">
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] font-medium mb-2">On Speak</p>
                  <p className="text-sm mb-4">
                    The Speak program was easy to implement and Uolo's team offered support & training. The teachers
                    find it helpful and parents like it as they can keep track of their child's progress on the app.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <p className="font-medium">Mrs. Swati Srivastava,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Montfort School,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bhopal</p>
                </div>
              </div>

              <div className="bg-[#fff5e6] dark:bg-[#1e293b] p-6 rounded-xl testimonial-card w-[25%]">
                <div className="testimonial-content">
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] font-medium mb-2">On Manage</p>
                  <p className="text-sm mb-4">
                    The School platform by Uolo saves the effort in managing financial dashboard handling fee
                    collection, reconciliation, and receipt generation with ease.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <p className="font-medium">Mr. Anurag Ghosh,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stanford International,</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">West Bengal</p>
                </div>
              </div>
            </div>
          </InfiniteCarousel>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Showcase</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <VideoSection
              name="Ashwin"
              class="6"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-1-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-1.mp4"
            />
            <VideoSection
              name="Sumit"
              class="7"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-2-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-2.mp4"
            />
            <VideoSection
              name="Kanika"
              class="3"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-3-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-3.mp4"
            />
            <VideoSection
              name="Mankirat"
              class="1"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-4-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-3.mp4"
            />
            <VideoSection
              name="Danish"
              class="5"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-5-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-5.mp4"
            />
            <VideoSection
              name="Ram Harish"
              class="8"
              thumbnail="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-thumb-6-Yx9Yd9Yx9Yd9.png"
              videoUrl="https://www.uolo.com/videos/showcase-5.mp4"
            />
          </div>

          <div className="mt-16 text-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-10 border-l-2 border-t-2 border-b-2 border-[#6c5ce7] dark:border-[#a78bfa] rounded-l-full"></div>
            <div className="max-w-4xl mx-auto px-10">
              <h3 className="text-xl md:text-2xl font-medium">
                Speak program's excellence is rooted in practical implementation across
                <span className="text-[#6c5ce7] dark:text-[#a78bfa] font-bold"> 1500+ Indian schools</span>
              </h3>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-10 border-r-2 border-t-2 border-b-2 border-[#6c5ce7] dark:border-[#a78bfa] rounded-r-full"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d3748] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Course Book</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive curriculum aligned with educational standards
              </p>
            </div>

            <div className="p-6 bg-[#6c5ce7] dark:bg-[#7c3aed] rounded-xl shadow-sm text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Animated Content</h3>
              <p className="text-sm text-white text-opacity-80">
                Engaging animations that make learning fun and interactive
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d3748] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Coding Platform</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interactive platform to learn and practice coding concepts
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d3748] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Teaching Aids</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Supportive materials to enhance classroom teaching experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#6c5ce7] dark:bg-[#7c3aed] rounded-xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your school?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of schools across India that are already benefiting from Uolo's comprehensive learning and
              management platform.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#6c5ce7] dark:text-[#7c3aed] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
