import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f172a] py-12 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#6c5ce7] dark:text-[#a78bfa] mb-4">Uolo</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering schools with innovative learning solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 dark:text-white">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/speak"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Speak
                </Link>
              </li>
              <li>
                <Link
                  href="/tekie"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Tekie
                </Link>
              </li>
              <li>
                <Link
                  href="/dawn"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Dawn
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products#ignite"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Ignite
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products#imagine"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Imagine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 dark:text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/manage"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  School Management
                </Link>
              </li>
              <li>
                <Link
                  href="/attendance"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  href="/communication"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Communication
                </Link>
              </li>
              <li>
                <Link
                  href="/report-card"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Report Card
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Fees Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Email: info@uolo.com</li>
              <li className="text-gray-600 dark:text-gray-300">Phone: +91 123 456 7890</li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Uolo. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/terms" className="hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
