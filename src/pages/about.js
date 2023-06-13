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
              <div
                className="col mb-5 "
                data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <p className="fs-4">Nice to meet you</p>
                <h1>About our company</h1>
              </div>
              <div
                className="col"
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <p className="fs-4 w-75">
                  Learn more about aour company and the team behind it.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid  mission-container">
            <div className="row row-sm-cols-1 justify-content-around">
              <p className="about-paragraph">
                SAN TECH is a global software development and consultancy firm
                that specializes in the design, development, implementation,
                capacity building and technical maintenance of customized Data
                warehouse, Business intelligence and Financial Management
                Information Systems (FMIS), Labour Market Management Information
                System ( LMIS) that improve information management, business
                process automation, decision-making, data and content
                management, service delivery, accountability, monitoring and
                institutional effectiveness. SAN TECH Founded in 2019 after
                being in hackathon of NIRDA . In October 2019 is one of company
                selected to join hackathon of NIRDA during development of ideas
                for visitors’ management system (E-Visitors system). SAN TECH is
                one of first startups graduated in NIRDA STEM for Industry (S4i)
                hacklton 2019 , and after graduation we use amount of award to
                open office at Muhima (Address: KN 1 Rd, 11 KN 89 St, Muhima,
                Kigali -Rwanda :<a href=" https://google/maps/gEDB7gFmJK51SGV39"> https://google/maps/gEDB7gFmJK51SGV39 </a>, and we
                were a team of 3 people , by now we have 10 employees. Our aim
                with clients, both new and existing, is to maximise the business
                value from their existing and new IT infrastructure to ensure
                that it is capable to deal with real world disruptions to their
                business environments and their diverse markets. SAN Tech
                contributes to the development of the country through bringing
                innovation to the industry (Made in Rwanda) by producing
                homemade products and raising the income to the GDP (Growth
                Domestic Products), Contributing to the national and regional IT
                sector by training young generations and enforcing career
                guidance through ICT Sector.
              </p>
             
              <p  className="about-paragraph mt-4">
               
                We are also specialized in creating and delivering a variety of
                information management solutions, including the following: -
                Case Management System (CMS) – an information system automating
                business processes and replacing paper-based case records within
                judicial institutions. - SAN TECH Indicator - a monitoring and
                evaluation (M&E) system that enables organizations to collect,
                analyze, and report on performance and results. - Social
                Protection Information System – an information system designed
                for administering social protection programs and delivering
                social benefits to vulnerable people. - Development Assistance
                Database (DAD) - the world’s leading country-level, country-led
                aid information management system. - Public Financial Management
                –a software solution that helps governments manage the lifecycle
                of public investment programming (PIP). - Education Management
                Information System (EMIS) - data collection, analysis and
                reporting toolset for education ministries and academic
                institutions.
              </p>
              <div className="col mb-5">
                <h1>
                  <ImPushpin className="mission-container-icon" />
                  <span className="ms-4">Mission</span>
                </h1>
                <p>
                  To unlock digital skills among young talents for preparing a
                  future solution providers platform and reliable innovators in
                  smart technology. Vision: Becoming a Tech Hub, which educates
                  and encourages new talents the ways of thinking invention and
                  innovations in technological products development to Gross
                  Domestic Products (GDP).
                </p>
              </div>
              <div className="col mb-5">
                <h1>
                  <BsFillEyeSlashFill className="mission-container-icon" />
                  <span className="ms-4">Vision </span>
                </h1>
                <p>
                  Becoming a Tech Hub, which educates and encourages new talents
                  the ways of thinking invention and innovations in
                  technological products development to Gross Domestic Products
                  (GDP).
                </p>
              </div>
              <div className="col mb-5 p-5">
                <h1>
                  <SiReactos className="mission-container-icon" />{" "}
                  <span className="ms-4"> Goals </span>
                </h1>
                <p>
                  upporting the new talents and equipping young generations in
                  training and innovations development for creating a future IT
                  experts’ generation and career guidance.
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
                <div
                  class="card"
                  data-aos="fade-up-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div class="card-body">
                    <img
                      src="https://media.licdn.com/dms/image/C4D03AQEQYBYpvuIxUQ/profile-displayphoto-shrink_800_800/0/1616165515838?e=1689811200&v=beta&t=05iMXwuo5Np3oMA74Sey3zuXj6sLOc0Z1BFxwM8RM2I"
                      style={{ height: "44vh" }}
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
                <div
                  class="card"
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
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
