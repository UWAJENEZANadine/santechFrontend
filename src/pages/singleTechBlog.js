import React, { useEffect, useState } from "react";
import PageLayout from "./pageLayout";
import { RiDeleteBinFill, RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SingleTechMenu from "../components/singleTechMenu";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const SingleTechBlog = () => {
  const [poster, setPoster] = useState({});

  const location = useLocation();
  const postID = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4040/post/${postID}`);
        setPoster(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postID]);

  return (
    <PageLayout>
      <div className="single container">
        <div className="content-container">
          <img src={`../uploads/${poster?.img}`} alt="image" />
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="image"
            />
            <div className="details">
              <span>Pacific</span>
              <p style={{ width: "300%", fontSize: "14px" }}>
                Posted {moment(poster.date).fromNow()}
              </p>
            </div>
            <div className="edit-icons">
              {/* <Link to={`/publish?edit=2`}> 
                <RiDeleteBinFill className="text-danger fs-2 pl-3" />
              </Link>
              <Link to={`/publish?edit=2`}>
                <RiEditLine className="text-success fs-2" />
              </Link> */}
            </div>
          </div>
          <h1>{poster.title}</h1>
          <p>
            Rwandan Young Innovators contributing to the 4th industrial
            revolution where IoT is leading the World industrial sector SAN Tech
            Ltd brought its contribution through EVS production, we are really
            grateful that the Nation is supporting youth.Rwandan Young
            <br />
            <br />
            Innovators contributing to the 4th industrial revolution where IoT
            is leading the World industrial sector SAN Tech Ltd brought its
            contribution through EVS production, we are really grateful that the
            Nation is supporting youth.Rwandan Young Innovators contributing to
            the 4th industrial revolution where IoT is leading the World
            industrial sector SAN Tech Ltd brought its contribution through EVS
            production, we are really grateful that the Nation is supporting
            <br />
            <br />
            Innovators contributing to the 4th industrial revolution where IoT
            is leading the World industrial sector SAN Tech Ltd brought its
            contribution through EVS production, we are really grateful that the
            Nation is supporting youth.Rwandan Young Innovators contributing to
            the 4th industrial revolution where IoT is leading the World
            industrial sector SAN Tech Ltd brought its contribution through EVS
            production, we are really grateful that the Nation is supporting
            <br />
            <br />
            youth.Rwandan Young Innovators contributing to the 4th industrial
            revolution where IoT is leading the World industrial sector SAN Tech
            Ltd brought its contribution through EVS production, we are really
            grateful that the Nation is supporting youth.Rwandan Young
            Innovators contributing to the 4th industrial revolution where IoT
            is leading the World industrial sector SAN Tech Ltd brought its
            contribution through EVS production, we are really grateful that the
            Nation is supporting youth.Rwandan Young Innovators contributing to
            the 4th industrial revolution where IoT is leading the World
            industrial sector SAN Tech Ltd brought its contribution through EVS
            production, we are really grateful that the Nation is supporting
            youth.
          </p>
        </div>

        <div className="Menu-container">
          <SingleTechMenu />
        </div>
      </div>
    </PageLayout>
  );
};

export default SingleTechBlog;
