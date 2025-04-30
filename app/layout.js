import { ThemeProvider } from "@/context/theme-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata = {
  title: "Uolo - School Management and Learning Platform",
  description: "Comprehensive school management and learning platform for schools across India",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
