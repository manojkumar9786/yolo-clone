"use client"

import { useRef, useState, useEffect } from "react"

export default function AutoPlayVideo({ src, className }) {
  const videoRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    return () => {
      if (video) {
        video.pause()
      }
    }
  }, [])

  return (
    <div className={`auto-play-video ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={videoRef} src={src} muted playsInline loop className="w-full h-full object-cover" />
    </div>
  )
}
