import React from "react";
import moment from "moment"
import "../css/story.css";


const StoryCard = ({ data }) => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="story-card-container">
      <div className="story-card">
        <div className="image">
          <img src={`../uploads/${data?.img}`} style={{ opacity: ".7" }} />
          <h2 className="quotation-mage"></h2>
        </div>
        <div className="card-story-detail">
          <div className="d-flex gap-4">
            <div>
              <h4 className="posted-date-story">{moment(data?.date).fromNow()}</h4>
            </div>
            <div>
              <h1>{getText(data.title)}</h1>
            </div>
          </div>

          <p className="story-paragraph">{getText(data?.details)}</p>
          <button className="btn-inline">
            Read More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
