"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection({ name, class: className, thumbnail, videoUrl }) {
  const [showModal, setShowModal] = useState(false)
  const videoRef = useRef(null)

  const handleOpenVideo = () => {
    setShowModal(true)
  }

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setShowModal(false)
  }

  return (
    <>
      <div className="video-card cursor-pointer" onClick={handleOpenVideo}>
        <div className="relative">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={name}
            width={200}
            height={250}
            className="w-full aspect-[3/4] object-cover rounded-lg"
          />
          <div className="play-button">
            <Play fill="white" color="#6c5ce7" size={20} />
          </div>
        </div>
        <div className="mt-2">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-600">Class {className}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl max-w-3xl h-[60vh] my-auto w-full">
            <button onClick={handleCloseVideo} className="absolute -top-10 right-0 text-white text-2xl">
              &times;
            </button>
            <video ref={videoRef} controls autoPlay className="w-full rounded-t-xl" src={videoUrl} />
          </div>
        </div>
      )}
    </>
  )
}
