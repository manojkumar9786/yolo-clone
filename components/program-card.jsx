import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ProgramCard({ title, description, grades, image }) {
  return (
    <Link
      href={`/${title.toLowerCase()}`}
      className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl overflow-hidden group"
    >
      <div className="p-6">
        <div className="mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} width={150} height={150} className="rounded-lg" />
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-sm text-[#6c5ce7]">{grades}</p>
      </div>
      <div className="bg-gray-200 px-6 py-3 flex justify-end">
        <ChevronRight className="text-[#6c5ce7] transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
