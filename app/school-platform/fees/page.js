import Link from "next/link"

export default function FeesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Fees Management</h1>
              <p className="text-xl mb-8">
                Streamline fee collection, generate invoices, and track payments with our comprehensive fees management
                system
              </p>
              <Link href="/request-demo">
                <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full transition duration-300">
                  Request Demo
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src="/admin-dashboard.png" alt="Fees Management Dashboard" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section with Tabs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Platform Features</h2>

          <div className="max-w-4xl mx-auto">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
              <nav className="flex space-x-8">
                <a
                  href="/school-platform/attendance"
                  className="border-b-2 border-transparent hover:border-gray-300 py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Attendance
                </a>
                <a
                  href="/school-platform/fees"
                  className="border-b-2 border-indigo-500 py-4 px-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"
                >
                  Fees
                </a>
                <a
                  href="/school-platform/communication"
                  className="border-b-2 border-transparent hover:border-gray-300 py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Communication
                </a>
                <a
                  href="/school-platform/report-card"
                  className="border-b-2 border-transparent hover:border-gray-300 py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Report Card
                </a>
              </nav>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Fees Management</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Simplify fee collection and management. Generate invoices, track payments, and send reminders
                automatically.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 dark:text-white">Online Payments</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Accept payments online through multiple payment gateways
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 dark:text-white">Automated Invoicing</h4>
                  <p className="text-gray-600 dark:text-gray-300">Generate and send invoices automatically</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 dark:text-white">Payment Tracking</h4>
                  <p className="text-gray-600 dark:text-gray-300">Track payments and outstanding dues in real-time</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 dark:text-white">Flexible Fee Structure</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create custom fee structures for different classes and categories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Hear from our partner schools</h2>

          <div className="testimonial-cards">
            <div className="testimonial-card bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The fees management system has streamlined our collection process. Parents love the convenience of
                online payments."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold dark:text-white">Robert Williams</h4>
                  <p className="text-gray-500 dark:text-gray-400">Finance Manager, Oakridge School</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The automated reminders have significantly reduced our outstanding dues. Our cash flow has improved
                tremendously."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold dark:text-white">Jennifer Lopez</h4>
                  <p className="text-gray-500 dark:text-gray-400">Accountant, Springfield Academy</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The reporting features give us clear insights into our financial status. It's made budgeting and
                planning much easier."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold dark:text-white">David Kim</h4>
                  <p className="text-gray-500 dark:text-gray-400">Director, Riverside International</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 dark:bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your fee management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of schools that have streamlined their fee collection with our platform
          </p>
          <Link href="/request-demo">
            <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Schedule a Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
