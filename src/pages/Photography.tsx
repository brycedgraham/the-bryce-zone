import React from "react"
import FlickrLightBox from "../components/FlickrLightbox"

const Photography = () => (
  <>
    <h4>
      "Logic will get you from A to Z; imagination will get you everywhere." ―
      Albert Einstein
    </h4>
    <div style={{ marginTop: "5px", fontSize: ".8em" }}>
      (Tap or click to enlarge)
    </div>
    <FlickrLightBox
      api_key="f9f0e2a4521bcd27d66dc1a26760b665"
      user_id="181987773@N05"
      album_id="72157709095461753"
      initialBatchSize={30}
      batchSize={15}
      // pageSize={30}
    />
  </>
)

export default Photography