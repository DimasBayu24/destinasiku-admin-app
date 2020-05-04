import React from "react";
import "./RegisterScreen.css";
// import { Link } from "react-router-dom";

export default class Register extends React.Component {
  render() {
    return (
      <div className="grid-container-index">
        {/* <!-- left-section --> */}

        {/* <!-- end of left-section -->

        <!-- right-section --> */}
        <section className="right-section">
          <div className="form-header">
            <header>Register an account</header>
            <p>Destinasiku</p>
          </div>
          <div className="login-form">
            <div className="login-form-body">
              <form action="" method="post">
                <div className="input-wrapper login">
                  <div className="input-items">
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <label for="">Email Address</label>
                  </div>
                  <div className="input-items password">
                    <input type="password" name="" id="" placeholder="Your password" />
                    <label for="">Password</label>
                  </div>
                  <div className="input-items password">
                    <input type="password" name="" id="" placeholder="Your password" />
                    <label for="">Confirm Password</label>
                  </div>
                </div>

                <div className="form-btn">
                  <ul>
                    <li>
                      <button>
                        Register
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="flex-footer">
                  <div className="footer-login">
                    <p>Already have an account?</p>
                  </div>

                  <div className="footer-login">
                    {/* eslint-disable-next-line */}
                    <a>Login</a>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </section>
        {/* <!-- end of right-section --> */}
        <section className="left-section">
          <img src={require("../../asset/img/register.png")} alt="" />
        </section>
      </div>
    );
  }
}
