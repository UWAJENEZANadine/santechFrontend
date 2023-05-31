import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate("/dashboard")
  return (
    <>

    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-xl-11">
            <div
              className="card text-black"
              style={{ borderRadius: "25px", width: "70%", margin:"auto" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign In
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control inputfield"
                            placeholder="Type your name"
                            style={{ height: "7vh" , fontSize:"1.3rem" }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Type your email"
                            style={{ height: "7vh", fontSize:"1.3rem"  }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Type your password"
                            style={{ height: "7vh", fontSize:"1.3rem" }}
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button  onClick={() => navigate("/dashboard")}
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                         Log In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                      style={{width:"100%"}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NavLink to="dashSignIn"></NavLink>
    </>
  );
};

export default SignIn;
