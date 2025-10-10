import React, { useState, useEffect } from "react"
import buildUrl from "build-url"
import fetch from "isomorphic-fetch"
import GalleryLightbox from "./GalleryLightbox"

interface FlickrLightBoxProps {
  api_key: string
  user_id?: string
  album_id?: string
  limit?: number
  searchTerm?: string
  className?: string
}

const FlickrLightBox = (props: FlickrLightBoxProps) => {
  const [images, imagesSet] = useState([])

  useEffect(() => {
    queryFlickrApi(props)
  }, [props])

  const generateApiUrl = (props: FlickrLightBoxProps) => {
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
        per_page: (props.limit || Number.MAX_SAFE_INTEGER).toString(),
        nojsoncallback: "?",
        extras: extras.join(","),
      },
    })
  }

  const queryFlickrApi = (props: FlickrLightBoxProps) => {
    fetch(generateApiUrl(props))
      .then(response => response.json())
      .then(data => {
        if (!data.photoset) {
          throw data
        }

        const imageResponse = data.photoset.photo
          .sort((a: any, b: any) => {
            const equal = new Date(b.datetaken).getTime() - new Date(a.datetaken).getTime()
            return equal
          })
          .map((p: any) => {
            return {
              src:
                p.url_l ||
                p.url_m ||
                "https://s.yimg.com/pw/images/en-us/photo_unavailable.png",
              thumbnail: p.url_sq,
              caption: `${p.title || "Untitled"}: Photo by ${p.ownername}`,
              height: p.height_l,
              width: p.width_l,
            }
          })

        imagesSet(imageResponse)
      })
      .catch(e => console.error(e))
  }

  return <GalleryLightbox photos={images} />
}

export default FlickrLightBox
