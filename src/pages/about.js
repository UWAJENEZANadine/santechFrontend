import React from "react";
import "../css/about.css";
import { ImPushpin } from "react-icons/im";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { SiReactos } from "react-icons/si";
import claud from "../assets/claudi.PNG";
import { AiOutlineHome, AiFillLinkedin } from "react-icons/ai";
import { MdForwardToInbox, MdAddIcCall } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import PageLayout from "./pageLayout";
const About = () => {
  return (
    <>
    <PageLayout>
      <div className="about-container-page">
        <div className="container-fluid about-container">
          <div className="row  row-cols-1 row-sm-cols-2 row-cols-md-2 justify-around text-white align-items-center about-container-content">
            <div className="col mb-5 "  data-aos="fade-up-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <p className="fs-4">Nice to meet you</p>
              <h1>About our company</h1>
            </div>
            <div className="col"  data-aos="fade-up-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <p className="fs-4 w-75">
                Learn more about aour company and the team behind it.
                
              </p>
            </div>
          </div>
        </div>

        <div className="container  mission-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-around">
            <div className="col mb-5">
              <h1>
                <ImPushpin className="mission-container-icon" />
                <span className="ms-4"> Mission</span>
              </h1>
              <p>
                To unlock digital skills among young talents for preparing a
                future solution providers platform and reliable innovators in
                smart technology
              </p>
            </div>
            <div className="col mb-5">
              <h1>
                <BsFillEyeSlashFill className="mission-container-icon" />
                <span className="ms-4"> Vision </span>
              </h1>
              <p>
                Santech is committed to continuous quality improvement and
                customer satisfaction. This is done by open communication with
                our customers.
              </p>
            </div>
            <div className="col mb-5 p-5">
              <h1>
                <SiReactos className="mission-container-icon" />{" "}
                <span className="ms-4"> Values </span>
              </h1>
              <p>
                Honesty, Boldness, Trust, Freedom, Fun, Modesty, Team Spirit ,
                Hardworking , Value-centricity, Respect ,simplicity and Loyalty
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="staff-container">
        <div className="container-fluid our-staff-container">
          <h1>Our Staff</h1>

          <span className="our-staff-container-line">
            Meet to one of our staff
          </span>
        </div>

        <div className="container">
          <div class="row">
            <div class="col-sm-4 col-md-5">
              <div class="card" data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div class="card-body">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQEQYBYpvuIxUQ/profile-displayphoto-shrink_800_800/0/1616165515838?e=1689811200&v=beta&t=05iMXwuo5Np3oMA74Sey3zuXj6sLOc0Z1BFxwM8RM2I"
                    style={{ height: "44vh"}}
                  />
                  <h3 class="card-title mb-3">Shema Pacifique</h3>
                  <div className="">
                    <BsFacebook className="fs-2 m-2" />
                    <FaTwitterSquare className="fs-2 m-2" />
             
                    <AiFillLinkedin className="fs-2 m-2" />
                    <FaInstagram className="fs-2 m-2" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-5">
              <div class="card"  data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div class="card-body">
                  <img src={claud} style={{ height: "44vh" }} />
                  <h3 class="card-title mb-3">Claudine Niyonzima</h3>
                  <BsFacebook className="fs-2 m-2" />
                  <FaTwitterSquare className="fs-2 m-2" />
            
                  <AiFillLinkedin className="fs-2 m-2" />
                  <FaInstagram className="fs-2 m-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </PageLayout>
    </>
  );
};
export default About;
