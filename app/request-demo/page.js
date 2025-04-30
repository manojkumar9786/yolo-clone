import Link from "next/link"

export default function RequestDemoPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Request a Demo</h1>
            <p className="text-gray-600">
              Fill out the form below to schedule a personalized demo of Uolo's products and platform.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="school_name" className="block text-sm font-medium text-gray-700 mb-1">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="school_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Enter your school name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Position
                  </label>
                  <select
                    id="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    required
                  >
                    <option value="">Select your position</option>
                    <option value="Principal">Principal</option>
                    <option value="Vice Principal">Vice Principal</option>
                    <option value="Teacher">Teacher</option>
                    <option value="IT Administrator">IT Administrator</option>
                    <option value="School Owner">School Owner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interested_in" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="interested_in"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    required
                  >
                    <option value="">Select what you're interested in</option>
                    <option value="Learning Products">Learning Products</option>
                    <option value="School Platform">School Platform</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Please share any specific requirements or questions you may have"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="consent" className="mt-1 mr-2" required />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to receive communications from Uolo. I understand I can unsubscribe at any time.
                    <Link href="/privacy-policy" className="text-[#6c5ce7] hover:underline ml-1">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white font-medium py-3 px-4 rounded-md"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need immediate assistance? Call us at
              <span className="text-[#6c5ce7] font-medium ml-1">+91 123 456 7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
