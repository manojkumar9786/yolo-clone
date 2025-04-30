"use client"

import { useRef, useEffect } from "react"

export default function InfiniteCarousel({ children, direction = "left", speed = 30 }) {
  const carouselRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    const content = contentRef.current

    if (!carousel || !content) return

    // Clone the content to create a seamless loop
    const clone = content.cloneNode(true)
    carousel.appendChild(clone)

    const contentWidth = content.offsetWidth
    let position = 0

    const animate = () => {
      if (direction === "left") {
        position -= 0.5
        if (Math.abs(position) >= contentWidth) {
          position = 0
        }
      } else {
        position += 0.5
        if (position >= contentWidth) {
          position = 0
        }
      }

      carousel.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [direction])

  return (
    <div className="overflow-hidden">
      <div ref={carouselRef} className="flex transition-transform" style={{ willChange: "transform" }}>
        <div ref={contentRef} className="flex">
          {children}
        </div>
      </div>
    </div>
  )
}
