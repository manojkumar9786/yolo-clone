import Link from "next/link"

export default function CommunicationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">School Communication</h1>
              <p className="text-xl mb-8">Connect with parents, students, and staff through our integrated communication platform</p>
              <Link href="/request-demo">
                <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full transition duration-300">
                  Request Demo
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/admin-dashboard.png" 
                alt="Communication Dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      { /* Platform Features Section with
