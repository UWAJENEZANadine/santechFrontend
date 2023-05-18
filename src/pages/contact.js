import React from "react";
import "../css/contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdRadio } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { RiFacebookLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";


const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div
          className="container-fluid contact-container-head"
          style={{ backgroundColor: "#000" }}
        >
          <div className="text-white align-items-center contact-container-content">
            <div className="mb-5 ">
              <h1 className="text-center">Get in Touch!</h1>
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
                    fill up the form and our team will get back to you within 24
                    hours.
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
                    <span> <a href="https://zeno.fm/san-tech/" target="_blank" style={{textDecoration:"none", color:"#03037f"}}>https://zeno.fm/san-tech/</a> </span>
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
                        style={{backgroundColor:"#f9fafb"}}
                      />
                    </div>
                    <div class="form-outline mb-5">
                      <label class="form-label" for="typeEmail">
                        Your Email
                      </label>
                      <input type="email" id="typeEmail" class="form-control p-3" style={{backgroundColor:"#f9fafb"}}/>
                    </div>
                    <div class="form-outline mb-5">
                      <label class="form-label" for="textAreaExample">
                        Message
                      </label>
                      <textarea
                        class="form-control"
                        id="textAreaExample"
                        rows="7"
                        style={{backgroundColor:"#f9fafb"}}
                      ></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" style={{fontSize:"1.5rem"}}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
