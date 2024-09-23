import React from 'react'
import './Vedio.css'
const Vedio = () => {
  return (
   <>
    
    <div class="video-container-wrapper">
  <div class="video-container">
    <h2>Watch Our Video</h2>
    <iframe 
      src="https://www.youtube.com/embed/97v0DW5b9uY" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
</div>

   </>
  )
}

export default Vedio