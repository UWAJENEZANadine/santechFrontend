import React from "react";
import "../css/gallery.css";
const GalleryCard = ({ data }) => {
  return (
    <div className="parallelogram-card d-flex gap-4">
      <div class="card">
        <img src={data.images[0]} />
      </div>
      <div class="card">
        <img src={data.images[0]} />
      </div>
      <div class="card">
        <img src={data.images[0]} />
      </div>
      <div class="card">
        <img src={data.images[0]} />
      </div>
    </div>
  );
};

export default GalleryCard;
