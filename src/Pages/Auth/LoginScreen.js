import React from "react";
import "./LoginScreen.css";
// import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div className="grid-container-index">
        {/* <!-- left-section --> */}

        {/* <!-- end of left-section -->

        <!-- right-section --> */}
        <section className="right-section">
          <div className="form-header">
            <header>Welcome to</header>
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
                </div>

                <div className="forgot-password">
                  <ul>
                    <li>
                      {/* eslint-disable-next-line */}
                      <a>Forgot Password</a>
                    </li>
                  </ul>
                </div>

                <div className="form-btn">
                  <ul>
                    <li>
                      <button>
                        Login
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="flex-footer">
                  <div className="footer-register">
                    <p>Don't have an account?</p>
                  </div>

                  <div className="footer-register">
                    {/* eslint-disable-next-line */}
                    <a>Register</a>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </section>
        {/* <!-- end of right-section --> */}
        <section className="left-section">
          <img src={require("../../asset/img/login.png")} alt="" />
        </section>
      </div>
    );
  }
}
