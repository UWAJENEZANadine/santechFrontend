import React from "react";
import "../css/story.css";
import gallery from "../assets/constants/gallery.json"
import StoryCard from "../components/storyCard";
import PageLayout from "./pageLayout";
const Story = () => {
  return (

    <>
    <PageLayout>
      <div className="Success-Story-container">
      {gallery.map((data) => (
          <StoryCard data={data} />
        ))}


       </div>
       </PageLayout>
    </>
  );
};

export default Story;
