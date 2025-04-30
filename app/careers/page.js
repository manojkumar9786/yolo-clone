import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f9fe] to-[#ebe6ff] dark:from-[#0a1128] dark:to-[#1a1f36] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
              Join Our <span className="text-[#6c5ce7] dark:text-[#a78bfa]">Team</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              Be part of a mission to transform education through innovation and technology
            </p>
            <Link
              href="#open-positions"
              className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 dark:bg-[#0a1128] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 slide-up">Why Join Uolo?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Meaningful Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work on products that positively impact the education of hundreds of thousands of students across India.
              </p>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Growth & Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous opportunities for professional development, learning, and career advancement in a rapidly
                growing company.
              </p>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold mb-2 dark:text-white">Innovation Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Be part of a dynamic environment that encourages creative thinking, innovation, and problem-solving.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Work-Life Balance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible work arrangements, competitive benefits, and a culture that values personal well-being and
                family time.
              </p>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  className="dark:stroke-[#a78bfa]"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Collaborative Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work with passionate, talented colleagues who are committed to making a difference in education.
              </p>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm text-center slide-in-right"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-16 h-16 bg-[#f3efff] dark:bg-[#2d2a4a] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold mb-2 dark:text-white">Competitive Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Attractive compensation, health insurance, retirement benefits, and other perks to support your
                well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 slide-in-left">
              <h2 className="text-3xl font-bold dark:text-white">Our Culture</h2>
              <p className="text-gray-700 dark:text-gray-300">
                At Uolo, we foster a culture of innovation, collaboration, and continuous learning. We believe in
                empowering our team members to take ownership of their work and contribute meaningfully to our mission.
              </p>
              <p className="text-gray-700 dark:text-gray-300">Our workplace is characterized by:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] dark:bg-[#2d2a4a] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6c5ce7"
                      className="dark:stroke-[#a78bfa]"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="dark:text-gray-300">Open communication and transparency</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] dark:bg-[#2d2a4a] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6c5ce7"
                      className="dark:stroke-[#a78bfa]"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="dark:text-gray-300">Recognition and celebration of achievements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] dark:bg-[#2d2a4a] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6c5ce7"
                      className="dark:stroke-[#a78bfa]"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="dark:text-gray-300">Respect for diverse perspectives and ideas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f3efff] dark:bg-[#2d2a4a] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6c5ce7"
                      className="dark:stroke-[#a78bfa]"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="dark:text-gray-300">Commitment to excellence and continuous improvement</span>
                </li>
              </ul>
            </div>
            <div className="slide-in-right">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team-culture-image-Rl9Yd9Tz9Yd0Yd0Yd0Yd0Yd0Yd0Yd.jpg"
                alt="Uolo Team Culture"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 dark:bg-[#0a1128] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white slide-up">Open Positions</h2>

          <div className="space-y-6">
            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Senior Software Engineer</h3>
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] mb-4">Engineering | Full-time | Remote/Gurugram</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We're looking for experienced software engineers to help build and scale our educational technology
                    platforms. You'll work on challenging problems and contribute to products that impact thousands of
                    schools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      React
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Node.js
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      AWS
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      5+ years
                    </span>
                  </div>
                </div>
                <Link
                  href="/careers/senior-software-engineer"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-5 py-2 font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Curriculum Developer</h3>
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] mb-4">Education | Full-time | Gurugram</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Join our curriculum team to develop engaging, effective learning materials for our educational
                    programs. You'll collaborate with subject matter experts and instructional designers to create
                    content that inspires students.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Education
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Content Development
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      3+ years
                    </span>
                  </div>
                </div>
                <Link
                  href="/careers/curriculum-developer"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-5 py-2 font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Product Manager</h3>
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] mb-4">Product | Full-time | Gurugram</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We're seeking a product manager to lead the development and enhancement of our educational products.
                    You'll work closely with engineering, design, and education teams to deliver exceptional user
                    experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Product Management
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      EdTech
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      4+ years
                    </span>
                  </div>
                </div>
                <Link
                  href="/careers/product-manager"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-5 py-2 font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div
              className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl shadow-sm slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Sales Executive</h3>
                  <p className="text-[#6c5ce7] dark:text-[#a78bfa] mb-4">Sales | Full-time | Multiple Locations</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Join our sales team to help bring Uolo's innovative solutions to more schools across India. You'll
                    build relationships with educational institutions and help them understand how our products can
                    transform their operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Sales
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      Education Sector
                    </span>
                    <span className="bg-[#f3efff] dark:bg-[#2d2a4a] text-[#6c5ce7] dark:text-[#a78bfa] text-sm px-3 py-1 rounded-full">
                      2+ years
                    </span>
                  </div>
                </div>
                <Link
                  href="/careers/sales-executive"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white rounded-md px-5 py-2 font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 slide-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Don't see a position that matches your skills?</p>
            <Link
              href="/careers/general-application"
              className="text-[#6c5ce7] dark:text-[#a78bfa] hover:underline font-medium"
            >
              Submit a general application
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white slide-up">Our Application Process</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#f3efff] dark:bg-[#2d2a4a]"></div>

              <div className="space-y-12">
                <div className="relative flex gap-6 slide-in-left" style={{ animationDelay: "0.1s" }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    1
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Application Review</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our recruitment team reviews your application and resume to assess your qualifications and fit for
                      the role.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 slide-in-left" style={{ animationDelay: "0.2s" }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Initial Screening</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Qualified candidates are invited for an initial phone or video screening to discuss your
                      background, experience, and interest in the role.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 slide-in-left" style={{ animationDelay: "0.3s" }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    3
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Skills Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Depending on the role, you may be asked to complete a skills assessment, technical challenge, or
                      case study to demonstrate your expertise.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 slide-in-left" style={{ animationDelay: "0.4s" }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    4
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Team Interviews</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Meet with potential team members and stakeholders to discuss your experience, skills, and how you
                      would contribute to the team.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 slide-in-left" style={{ animationDelay: "0.5s" }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    5
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Final Decision & Offer</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      After the interview process, we'll make a decision and extend an offer to the selected candidate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6c5ce7] dark:bg-[#4c3dbd] transition-colors duration-300">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 slide-up">Ready to Join Our Mission?</h2>
            <p className="mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              Explore our open positions and take the first step towards a rewarding career at Uolo.
            </p>
            <Link
              href="#open-positions"
              className="bg-white text-[#6c5ce7] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
