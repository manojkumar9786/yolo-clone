"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0a1128] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#6c5ce7] dark:text-[#a78bfa]">
              <Image
                src="https://www.uolo.com/images/logo.svg"
                alt="Uolo"
                width={100}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                <span>Learning Products</span>
                <ChevronDown size={16} />
              </button>

              {isProductsDropdownOpen && (
                <div className="dropdown-menu absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Popular Programs</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/speak"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Speak
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tekie"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Tekie
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dawn"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Dawn
                        </Link>
                      </li>
                    </ul>

                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 mb-2">All Products</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/all-products"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          View All Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/school-platform"
              className="text-gray-700 dark:text-gray-200 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
            >
              School Platform
            </Link>

            <Link
              href="/request-demo"
              className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors text-white rounded-md px-4 py-2"
            >
              Request demo
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                className="flex items-center justify-between text-gray-700 dark:text-gray-200 hover:text-[#6c5ce7] dark:hover:text-[#a78bfa]"
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              >
                <span>Learning Products</span>
                <ChevronDown size={16} className={isProductsDropdownOpen ? "transform rotate-180" : ""} />
              </button>

              {isProductsDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Popular Programs</h3>
                  <ul className="space-y-2 pl-2">
                    <li>
                      <Link
                        href="/speak"
                        className="block text-gray-700 dark:text-gray-200"
                        onClick={() => {
                          setIsProductsDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        Speak
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tekie"
                        className="block text-gray-700 dark:text-gray-200"
                        onClick={() => {
                          setIsProductsDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        Tekie
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dawn"
                        className="block text-gray-700 dark:text-gray-200"
                        onClick={() => {
                          setIsProductsDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        Dawn
                      </Link>
                    </li>
                  </ul>

                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">All Products</h3>
                  <ul className="space-y-2 pl-2">
                    <li>
                      <Link
                        href="/all-products"
                        className="block text-gray-700 dark:text-gray-200"
                        onClick={() => {
                          setIsProductsDropdownOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        View All Products
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <Link
                href="/school-platform"
                className="text-gray-700 dark:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                School Platform
              </Link>

              <Link
                href="/request-demo"
                className="bg-[#6c5ce7] hover:bg-[#5849d1] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] transition-colors text-white rounded-md px-4 py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Request demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
