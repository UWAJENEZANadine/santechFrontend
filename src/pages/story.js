import React from "react";
import "../css/story.css";
import StoryCard from "../components/storyCard";
// import gallery from "../assets/constants/gallery.json"
import PageLayout from "./pageLayout";
import { useState, useEffect } from "react";
import axios from "axios";
const Story = () => {
  const [testmonial, setTestmonial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4040/testimonial");
        setTestmonial(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <PageLayout>
        <div className="container Success-Story-container">
          {testmonial.map((data) => (
            <StoryCard data={data} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Story;
