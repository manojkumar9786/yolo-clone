"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AllProductsPage() {
  const [activeSection, setActiveSection] = useState(null)

  // Products data
  const products = [
    {
      id: "ignite",
      title: "Ignite",
      subtitle: "English",
      description: "Unlocking essential English skills",
      grades: "For Grades 1-5",
      price: "Starting @ ₹449/Student/Year",
      features: [
        "Builds Listening, Speaking, Reading, and Writing (LSRW) skills through a variety of activities and exercises",
        "Exposure to a variety of literary pieces with attractive illustrations",
        "Integrated grammar for contextual learning",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ignite-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      id: "imagine",
      title: "Imagine",
      subtitle: "Mathematics",
      description: "Building strong mathematical foundations",
      grades: "For Grades 1-8",
      price: "Starting @ ₹429/Student/Year",
      features: [
        "Designed to meet the latest curriculum requirements of NCF 2023",
        "Lesson plans and activities help teachers to make class engaging, extensive question banks for assessments",
        "Maths comes alive with immersive exercises, real-world applications, and critical thinking questions",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagine-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      id: "discover",
      title: "Discover",
      subtitle: "EVS",
      description: "Discovering connections in our world",
      grades: "For Grades 1-5",
      price: "Starting @ ₹419/Student/Year",
      features: [
        "Engaging environmental science curriculum that connects students with the world around them",
        "Interactive activities that promote exploration and discovery",
        "Focus on sustainability and environmental awareness",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discover-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-green-100 dark:bg-green-900/20",
    },
    {
      id: "quest",
      title: "Quest",
      subtitle: "Social Science",
      description: "Explore time, lands and cultures",
      grades: "For Grades 3-8",
      price: "Starting @ ₹419/Student/Year",
      features: [
        "Comprehensive social studies curriculum covering history, geography, and civics",
        "Interactive maps and timelines that bring social studies to life",
        "Focus on cultural understanding and global citizenship",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quest-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-amber-100 dark:bg-amber-900/20",
    },
    {
      id: "aware",
      title: "Aware",
      subtitle: "General Knowledge & Current Affairs",
      description: "Navigate the rapidly changing world",
      grades: "For Grades 1-8",
      price: "Starting @ ₹399/Student/Year",
      features: [
        "Up-to-date content on current affairs and general knowledge",
        "Age-appropriate information presented in an engaging format",
        "Quizzes and activities to test and reinforce knowledge",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aware-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      id: "hexa",
      title: "Hexa",
      subtitle: "Computer Science",
      description: "One byte at a time",
      grades: "For Grades 1-8",
      price: "Starting @ ₹449/Student/Year",
      features: [
        "Progressive computer science curriculum that builds skills from basic to advanced",
        "Hands-on coding exercises and projects",
        "Focus on computational thinking and problem-solving",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hexa-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-indigo-100 dark:bg-indigo-900/20",
    },
    {
      id: "perfect",
      title: "Perfect",
      subtitle: "Maths Workbook",
      description: "Practice makes perfect",
      grades: "For Grades 1-8",
      price: "Starting @ ₹399/Student/Year",
      features: [
        "Supplementary workbook with additional practice problems",
        "Graduated difficulty levels to challenge students appropriately",
        "Focus on building mathematical fluency and confidence",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfect-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      id: "reflection",
      title: "Reflection",
      subtitle: "Science",
      description: "Think, Explore, Learn",
      grades: "For Grades 1-8",
      price: "Starting @ ₹429/Student/Year",
      features: [
        "Comprehensive science curriculum aligned with national standards",
        "Hands-on experiments and activities that bring science concepts to life",
        "Focus on scientific inquiry and critical thinking",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reflection-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-teal-100 dark:bg-teal-900/20",
    },
    {
      id: "wisdom",
      title: "Wisdom",
      subtitle: "All subjects (2 semesters)",
      description: "Holistic learning across subjects",
      grades: "For Grades 1-8",
      price: "Starting @ ₹799/Student/Year",
      features: [
        "Comprehensive package covering all core subjects",
        "Integrated approach that shows connections between different subjects",
        "Cost-effective solution for complete curriculum coverage",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wisdom-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-emerald-100 dark:bg-emerald-900/20",
    },
    {
      id: "insights",
      title: "Insights",
      subtitle: "All subjects (3 terms)",
      description: "Deeper learning across subjects",
      grades: "For Grades 1-8",
      price: "Starting @ ₹999/Student/Year",
      features: [
        "Extended curriculum coverage with three terms of content",
        "In-depth exploration of concepts across all subjects",
        "Comprehensive assessment and progress tracking",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insights-cover-Yx9Yd9Yx9Yd9.png",
      color: "bg-yellow-100 dark:bg-yellow-900/20",
    },
  ]

  // Scroll to section when hash changes
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(hash)
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f9fe] to-[#ebe6ff] dark:from-[#0a1128] dark:to-[#1e293b]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Scholastic products, are designed to
            </h1>
            <div className="text-3xl md:text-4xl font-bold">
              <span className="text-[#6c5ce7] dark:text-[#a78bfa]">accelerate</span> learning,
              <span className="text-[#6c5ce7] dark:text-[#a78bfa]"> amplify</span> potential & help students
              <span className="text-[#6c5ce7] dark:text-[#a78bfa]"> achieve</span> remarkable success in life
            </div>
            <div className="mt-8">
              <Link
                href="/request-demo"
                className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-16 z-40 bg-white dark:bg-[#0a1128] shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeSection === product.id
                    ? "bg-[#6c5ce7] text-white dark:bg-[#7c3aed]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveSection(product.id)}
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-32">
                <div className={`rounded-3xl overflow-hidden ${product.color} p-8 md:p-12`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{product.subtitle}</p>
                      <p className="text-2xl font-medium mb-6">{product.description}</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-8">{product.grades}</p>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Key Features</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 text-[#6c5ce7] dark:text-[#a78bfa]">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <p className="text-lg font-bold">{product.price}</p>
                        <Link
                          href="/request-demo"
                          className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors inline-block text-white rounded-md px-6 py-3 font-medium text-center"
                        >
                          Request Demo
                        </Link>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6c5ce7] dark:bg-[#7c3aed] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your school's learning experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of schools across India that are already using Uolo's comprehensive learning programs.
          </p>
          <Link
            href="/request-demo"
            className="bg-white text-[#6c5ce7] dark:text-[#7c3aed] hover:bg-gray-100 transition-colors inline-block rounded-md px-8 py-3 font-medium"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
