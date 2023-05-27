import React from "react";
import "../css/story.css";
import gallery from "../assets/constants/gallery.json"
import StoryCard from "../components/storyCard";
const Story = () => {
  return (
    <>
      <div className="Success-Story-container">
      {gallery.map((data) => (
          <StoryCard data={data} />
        ))}


       </div>
    </>
  );
};

export default Story;
