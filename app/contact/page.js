import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f9fe] to-[#ebe6ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-[#6c5ce7]">Us</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f3efff] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#6c5ce7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Uolo Technologies Pvt. Ltd.
                      <br />
                      123 Tech Park, Sector 15
                      <br />
                      Gurugram, Haryana 122001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f3efff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#6c5ce7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      General Inquiries: +91 123 456 7890
                      <br />
                      Support: +91 123 456 7891
                      <br />
                      Sales: +91 123 456 7892
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f3efff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#6c5ce7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@uolo.com
                      <br />
                      Support: support@uolo.com
                      <br />
                      Sales: sales@uolo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f3efff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#6c5ce7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#6c5ce7] focus:border-[#6c5ce7] outline-none"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#6c5ce7] hover:bg-[#5849d1] transition-colors text-white font-medium py-3 px-6 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[16/9] bg-gray-200">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">How can I schedule a demo of Uolo's products?</h3>
              <p className="text-gray-600">
                You can schedule a demo by filling out our{" "}
                <Link href="/request-demo" className="text-[#6c5ce7] hover:underline">
                  Request Demo form
                </Link>
                , calling our sales team at +91 123 456 7892, or emailing sales@uolo.com.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">What support options are available for existing customers?</h3>
              <p className="text-gray-600">
                We offer comprehensive support through our dedicated support team. You can reach them via email at
                support@uolo.com or by phone at +91 123 456 7891. We also provide detailed documentation and training
                resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">How can schools implement Uolo's learning programs?</h3>
              <p className="text-gray-600">
                Implementation is straightforward and guided by our team. We provide comprehensive training for
                teachers, setup assistance, and ongoing support to ensure a smooth transition and effective use of our
                programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Are there job opportunities at Uolo?</h3>
              <p className="text-gray-600">
                Yes, we're always looking for talented individuals to join our team. Visit our{" "}
                <Link href="/careers" className="text-[#6c5ce7] hover:underline">
                  Careers page
                </Link>{" "}
                to see current openings or email your resume to careers@uolo.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6c5ce7]">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your School?</h2>
            <p className="mb-8">
              Join thousands of schools across India that are already benefiting from Uolo's comprehensive learning and
              management solutions.
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
