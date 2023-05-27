import React from "react";
import "../css/story.css";

const StoryCard = ({ data }) => {
  return (
    <div className="story-card-container">
      <div className="story-card">
        <div className="image">
          <img src={data.images[0]} style={{ opacity: ".7" }} />
          <h2 className="quotation-mage"></h2>
        </div>
        <div className="card-story-detail">
          <div className="d-flex gap-4">
            <div>
              <h4 className="posted-date-story">{data.postedDate}</h4>
            </div>
            <div>
              <h1>{data.title}</h1>
            </div>
          </div>

          <p className="story-paragraph">{data.description}</p>
          <button className="btn-inline">
            Read More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
