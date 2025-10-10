import React, { useState, useEffect, useCallback, useRef } from "react"
import buildUrl from "build-url"
import { Gallery, Image } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

interface FlickrLightBoxProps {
  api_key: string
  user_id?: string
  album_id?: string
  limit?: number
  searchTerm?: string
  className?: string
  perPage?: number
  enablePagination?: boolean
}

const FlickrLightBox = (props: FlickrLightBoxProps) => {
  const {
    perPage = 20,
    enablePagination = true,
    ...flickrProps
  } = props

  const [images, setImages] = useState<Image[]>([])
  const [index, setIndex] = useState(-1)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalPhotos, setTotalPhotos] = useState(0)
  
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const generateApiUrl = useCallback((props: FlickrLightBoxProps, page: number) => {
    const extras = [
      "url_l",
      "url_m",
      "url_sq",
      "license",
      "date_upload",
      "date_taken",
      "icon_server",
      "original_format",
      "last_update",
      "geo",
      "tags",
      "machine_tags",
      "o_dims",
      "views",
      "media",
      "path_alias",
      "owner_name",
    ]
    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method:
          props.user_id || props.album_id || props.searchTerm
            ? "flickr.photosets.getPhotos"
            : "flickr.photos.getRecent",
        format: "json",
        api_key: props.api_key || "",
        user_id: props.user_id || "",
        photoset_id: props.album_id || "",
        text: props.searchTerm || "",
        per_page: enablePagination ? perPage.toString() : (props.limit || Number.MAX_SAFE_INTEGER).toString(),
        page: enablePagination ? page.toString() : "1",
        nojsoncallback: "?",
        extras: extras.join(","),
      },
    })
  }, [perPage, enablePagination])

  const parseFlickrPhotos = useCallback((photos: any[]) => {
    return photos.map((p: any) => ({
      src: p.url_l || p.url_m || "https://s.yimg.com/pw/images/en-us/photo_unavailable.png",
      thumbnail: p.url_sq,
      thumbnailWidth: 150,
      thumbnailHeight: 150,
      caption: `${p.title || "Untitled"}: Photo by ${p.ownername}`,
      width: p.width_l || 1024,
      height: p.height_l || 768,
      alt: p.title || "Untitled photo",
    }))
  }, [])

  const queryFlickrApi = useCallback(async (props: FlickrLightBoxProps, page: number, append: boolean = false) => {
    try {
      if (append) {
        setLoadingMore(true)
      } else {
        setLoading(true)
      }
      setError(null)

      const response = await fetch(generateApiUrl(props, page))
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()

      if (!data.photoset) {
        throw new Error("No photoset found in response")
      }

      const photoset = data.photoset
      const sortedPhotos = photoset.photo.sort((a: any, b: any) => {
        return new Date(b.datetaken).getTime() - new Date(a.datetaken).getTime()
      })

      const newImages = parseFlickrPhotos(sortedPhotos)

      if (append) {
        setImages(prev => [...prev, ...newImages])
      } else {
        setImages(newImages)
      }

      // Update pagination info
      setTotalPages(parseInt(photoset.pages) || 1)
      setTotalPhotos(parseInt(photoset.total) || newImages.length)
      setCurrentPage(page)

    } catch (e) {
      console.error("Error fetching Flickr photos:", e)
      setError(e instanceof Error ? e.message : "Failed to load photos")
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [generateApiUrl, parseFlickrPhotos])

  const loadMoreImages = useCallback(() => {
    if (loadingMore || !enablePagination || currentPage >= totalPages) return
    queryFlickrApi(flickrProps, currentPage + 1, true)
  }, [currentPage, totalPages, loadingMore, enablePagination, queryFlickrApi, flickrProps])

  // Set up Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current || !enablePagination) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore && currentPage < totalPages) {
          loadMoreImages()
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    )

    observerRef.current.observe(loadMoreRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadMoreImages, loadingMore, currentPage, totalPages, enablePagination])

  // Initial load
  useEffect(() => {
    setImages([])
    setCurrentPage(1)
    queryFlickrApi(flickrProps, 1, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flickrProps.api_key, flickrProps.user_id, flickrProps.album_id, flickrProps.searchTerm, flickrProps.limit])

  const handleClick = (index: number) => setIndex(index)

  const slides = images.map(({ src, width, height, caption, alt }) => ({
    src,
    width,
    height,
    title: caption || "",
    alt: alt || "",
  }))

  if (loading) {
    return (
      <div className={props.className} style={{ textAlign: "center", padding: "3rem" }}>
        <div style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          border: "5px solid rgba(13, 48, 11, 0.2)",
          borderTopColor: "#0d300b",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }} />
        <p style={{ marginTop: "1rem", color: "#666" }}>Loading photos...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (error) {
    return (
      <div className={props.className} style={{
        padding: "2rem",
        backgroundColor: "#fee",
        border: "1px solid #fcc",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <h3 style={{ color: "#c33", marginBottom: "0.5rem" }}>Error Loading Photos</h3>
        <p style={{ color: "#666" }}>{error}</p>
        <button
          onClick={() => queryFlickrApi(flickrProps, 1, false)}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#0d300b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Try Again
        </button>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className={props.className} style={{ textAlign: "center", padding: "3rem", color: "#666" }}>
        <p>No photos found</p>
      </div>
    )
  }

  const hasMore = enablePagination && currentPage < totalPages

  return (
    <div className={props.className}>
      {enablePagination && (
        <div style={{ marginBottom: "1rem", color: "#666", fontSize: "0.9rem" }}>
          Showing {images.length} of {totalPhotos} photos
          {totalPages > 1 && ` (page ${currentPage} of ${totalPages})`}
        </div>
      )}

      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={200}
        margin={8}
      />

      {hasMore && (
        <div
          ref={loadMoreRef}
          style={{
            textAlign: "center",
            padding: "2rem",
            minHeight: "100px"
          }}
        >
          {loadingMore ? (
            <>
              <div style={{
                display: "inline-block",
                width: "40px",
                height: "40px",
                border: "4px solid rgba(13, 48, 11, 0.2)",
                borderTopColor: "#0d300b",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }} />
              <p style={{ marginTop: "0.5rem", color: "#666" }}>Loading more...</p>
            </>
          ) : (
            <button
              onClick={loadMoreImages}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0d300b",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              Load More Photos
            </button>
          )}
        </div>
      )}

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16,
        }}
      />
    </div>
  )
}

export default FlickrLightBox