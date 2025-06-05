import React, { useState } from "react";
import { BiUser, BiLockAlt, BiEnvelope } from "react-icons/bi";
import "./Login.scss";

function Login() {
  const [active, setActive] = useState(false);

  // Estados para los datos de login y registro
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });

  // Manejar cambios en los inputs de login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Manejar cambios en los inputs de registro
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Solo mostrar los datos por consola al enviar
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", registerData);
  };

  return (
    <div className={`container${active ? " active" : ""}`}>
      {/* Curved shapes */}
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      {/* Login Form */}
      <div className="form-box Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
            <input
              type="text"
              name="username"
              required
              value={loginData.username}
              onChange={handleLoginChange}
            />
            <label>Username</label>
            <BiUser />
          </div>
          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input
              type="password"
              name="password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <label>Password</label>
            <BiLockAlt />
          </div>
          <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
            <button className="btn" type="submit">Login</button>
          </div>
          <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
            <p>
              Don't have an account? <br />
              <a href="#" className="SignUpLink" onClick={e => { e.preventDefault(); setActive(true); }}>
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>WELCOME BACK!</h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          We are happy to have you with us again. If you need anything, we are here to help.
        </p>
      </div>

      {/* Register Form */}
      <div className="form-box Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input
              type="text"
              name="username"
              required
              value={registerData.username}
              onChange={handleRegisterChange}
            />
            <label>Username</label>
            <BiUser />
          </div>
          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input
              type="email"
              name="email"
              required
              value={registerData.email}
              onChange={handleRegisterChange}
            />
            <label>Email</label>
            <BiEnvelope />
          </div>
          <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
            <input
              type="password"
              name="password"
              required
              value={registerData.password}
              onChange={handleRegisterChange}
            />
            <label>Password</label>
            <BiLockAlt />
          </div>
          <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
            <button className="btn" type="submit">Register</button>
          </div>
          <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
            <p>
              Already have an account? <br />
              <a href="#" className="SignInLink" onClick={e => { e.preventDefault(); setActive(false); }}>
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>WELCOME!</h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          We’re delighted to have you here. If you need any assistance, feel free to reach out.
        </p>
      </div>
    </div>
  );
}

export default Login;