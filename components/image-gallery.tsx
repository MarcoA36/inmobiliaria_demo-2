"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: string[]
  title: string
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeGallery = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") closeGallery()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeGallery, goToPrevious, goToNext])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Imagen principal */}
        <button
          onClick={() => openGallery(0)}
          className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
        >
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
        </button>

        {/* Imágenes secundarias */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => openGallery(index + 1)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={image}
                alt={`${title} - Imagen ${index + 2}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </button>
          ))}

          {/* Botón ver todas las fotos */}
          {images.length > 4 && (
            <button
              onClick={() => openGallery(0)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-muted"
            >
              <Image
                src={images[4]}
                alt={`${title} - Ver más`}
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-foreground/40 flex flex-col items-center justify-center text-background">
                <Grid3X3 className="h-8 w-8 mb-2" />
                <span className="font-medium">Ver {images.length} fotos</span>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-background">
            <span className="text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeGallery}
              className="text-background hover:bg-background/20 hover:text-background"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Imagen principal */}
          <div className="flex-1 flex items-center justify-center px-4 relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 text-background hover:bg-background/20 hover:text-background h-12 w-12"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative w-full max-w-5xl h-[70vh]">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Imagen ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 text-background hover:bg-background/20 hover:text-background h-12 w-12"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="p-4">
            <div className="flex justify-center gap-2 overflow-x-auto max-w-3xl mx-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                    currentIndex === index
                      ? "ring-2 ring-background opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
