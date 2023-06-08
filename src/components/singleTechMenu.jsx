import React from "react";
import "../css/techBlog.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SingleTechMenu = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4040/post");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
 
  return (
    <div className="Menu-post">
      <h1>Other posts You may like</h1>
      {posts.map((post) => (
        <div className="Menu-post-data" key={post.id}>
          <img src={`../uploads/${post.img}`} alt="image" />
          <h2>{post.title}</h2>
          <button className="Menu-post-button"><Link to={"/blog"} style={{textDecoration:"none", color:""}}>Read More</Link></button>
        </div>
      ))}
    </div>
  );
};

export default SingleTechMenu;
