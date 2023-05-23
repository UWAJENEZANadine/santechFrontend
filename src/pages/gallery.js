import React from "react";
import "../css/gallery.css";
import video from "../assets/coverr-a-man-comes-into-his-office-3446-1080p.mp4";
import gallery from "../assets/constants/gallery.json";

const Gallery = () => {
  return (
    <div className="Gallery-container">
      <section className="Gallery-container-video">
        <div className="bg-video">
          <video
            src={video}
            className="bg-video__container"
            autoPlay
            muted
            loop
          ></video>
          <h1 className="text-white">SanTech Gallery</h1>
        </div>
      </section>
      <div className="gallery-image">
        <div className="card parallelogram-card">
        <div class="parallelogram"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
