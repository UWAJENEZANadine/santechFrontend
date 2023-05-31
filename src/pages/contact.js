import React, { useState } from "react";
import "../css/contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdRadio } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { RiFacebookLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./pageLayout";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [image, setImage] = useState("");

  const addBlogInfo = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("fname", fname);
    formData.append("photo", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:4040/registerblog",
      formData,
      config
    );
    console.log(res);
  };

  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [country, setCountry] = useState("");
  // const [position, setPosition] = useState("");
  // const [wage, setWage] = useState(0);

  // const [userList, setUserList] = useState([]);

  // const addUser = () => {
  //   axios
  //     .post("http://localhost:4040/create", {
  //       name: name,
  //       age: age,
  //       country: country,
  //       position: position,
  //       wage: wage,
  //     })
  //     .then(() => {
  //       setUserList([
  //         ...userList,
  //         {
  //           name: name,
  //           age: age,
  //           country: country,
  //           position: position,
  //           wage: wage,
  //         },
  //       ]);
  //     });
  // };

  // const getUser = () => {
  //   axios.get("http://localhost:4040/users").then((response) => {
  //     setUserList(response.data);
  //   });
  // };

  return (
    <>
      <PageLayout>
        <div className="contact-container">
          <div
            className="container-fluid contact-container-head"
            style={{ backgroundColor: "#000" }}
          >
            <div className="text-white align-items-center contact-container-content">
              <div className="mb-5 ">
                <h1
                  className="text-center"
                  data-aos="fade-up-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Get in Touch!
                </h1>
              </div>
            </div>
          </div>
          <div className="contact-card-whole-part">
            <section className="contact-card-whole-part-inside">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                  <div className="col">
                    <h1>Get a quote</h1>

                    <p>
                      fill up the form and our team will get back to you within
                      24 hours.
                    </p>
                    <h4>
                      <BsTelephoneFill style={{ color: "#a78bfa" }} />
                      <span>+250 783 250 033/ +250 780 309 833</span>
                    </h4>
                    <h4
                      style={{
                        border: "2px solid #a78bfa",
                        minWidth: "60%",
                        paddingLeft: "4px",
                        boxShadow: "0rem 2rem 6rem #a78bfa",
                      }}
                    >
                      <MdEmail style={{ color: "#a78bfa" }} />
                      <span> info@santechrwanda.com</span>
                    </h4>

                    <h4>
                      <ImLocation style={{ color: "#a78bfa" }} />
                      <span> Street KN 89 St, Kigali-Rwanda</span>
                    </h4>
                    <h4>
                      <MdRadio style={{ color: "#a78bfa" }} />
                      <span>
                        {" "}
                        <a
                          href="https://zeno.fm/san-tech/"
                          target="_blank"
                          style={{ textDecoration: "none", color: "#03037f" }}
                        >
                          https://zeno.fm/san-tech/
                        </a>{" "}
                      </span>
                    </h4>
                    <div className="contact-footer-icon ">
                      <RiFacebookLine
                        style={{
                          fontSize: "3.5rem",
                          color: "#a78bfa",
                          backgroundColor: "#7c3aed",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                      <RxTwitterLogo
                        style={{
                          fontSize: "3.5rem",
                          color: "#a78bfa",
                          backgroundColor: "#7c3aed",
                          borderRadius: "50%",
                          marginLeft: "4rem",
                          padding: "5px",
                        }}
                      />
                      <IoLogoInstagram
                        style={{
                          fontSize: "3.5rem",
                          color: "#a78bfa",
                          backgroundColor: "#7c3aed",
                          borderRadius: "50%",
                          marginLeft: "4rem",
                          padding: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="left-side">
                      <div class="form-outline mb-5">
                        <label class="form-label" for="formControlLg">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="formControlLg"
                          class="form-control form-control-lg p-3"
                          style={{ backgroundColor: "#f9fafb" }}
                        />
                      </div>
                      <div class="form-outline mb-5">
                        <label class="form-label" for="typeEmail">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="typeEmail"
                          class="form-control p-3"
                          style={{ backgroundColor: "#f9fafb" }}
                        />
                      </div>
                      <div class="form-outline mb-5">
                        <label class="form-label" for="textAreaExample">
                          Message
                        </label>
                        <textarea
                          class="form-control"
                          id="textAreaExample"
                          rows="7"
                          style={{ backgroundColor: "#f9fafb" }}
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* <div className="data-input">
        <div className="information">
          <input
            type="text"
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="position"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="wage"
            onChange={(event) => {
              setWage(event.target.value);
            }}
          />
          <button className="information-button" onClick={addUser}>
            Submit
          </button>
          <button className="information-button" onClick={getUser}>
            Show user
          </button>

          {userList.map((val, key) => {
            return <div>{val.name}</div>;
          })}
        </div>
      </div> */}

        <div style={{ alignItems: "center", paddingLeft:"4rem" }}>
          <Button
            variant="primary"
            className="mb-3"
            type="submit"
            style={{ width: "20%", height: "6vh" }}
            onClick={() => navigate("/dashboard")}
          >
            click me
          </Button>
        </div>
      </PageLayout>
    </>
  );
};

export default Contact;
