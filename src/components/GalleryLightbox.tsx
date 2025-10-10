import React, { useState } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

interface Photo {
  src: string
  srcSet?: string[]
  title?: string
  width: number
  height: number
}

interface GalleryLightboxProps {
  photos: Photo[]
}

export default function GalleryLightbox(props: GalleryLightboxProps) {
  const { photos } = props
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (event: any, obj: any) => {
    setCurrentImage(obj.index)
    setViewerIsOpen(true)
  }
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
                width: 200,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
