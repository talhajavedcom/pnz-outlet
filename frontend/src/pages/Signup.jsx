import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [captchaValue, setCaptchaValue] = useState(null);

  const Navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA challenge.");
      return;
    }
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        { name, email, password, phone, address }
      );
      if (result.data.success) {
        toast.success(result.data.message);
        Navi("/login");
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="account-login section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form className="card login-form" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="title">
                  <center>
                    <h3>Register New Account</h3>
                  </center>
                </div>

                <label>Name</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <label>Email</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    type="email"
                    required
                  />
                </div>

                <label>Password</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="form-control"
                    type="password"
                    required
                  />
                </div>

                <label>Phone</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <label>Address</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="d-flex flex-wrap justify-content-between bottom-content">
                  <a className="lost-pass" href="/">
                    Forgot password?
                  </a>
                </div>
                <div className="button">
                  <center>
                    <br />
                    <center>
                      <ReCAPTCHA
                        sitekey="6LegzgIpAAAAAOXIz6k4z8ZFPjs7Nh2-MJaZbbpd"
                        onChange={(captchaResult) =>
                          setCaptchaValue(captchaResult)
                        }
                      />
                    </center>
                    <button className="btn" type="submit">
                      Register Now
                    </button>
                  </center>
                </div>

                <center>
                  <p className="outer-link">
                    if Don't have an account?{" "}
                    <Link to="/login">Please Login here </Link>
                  </p>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
