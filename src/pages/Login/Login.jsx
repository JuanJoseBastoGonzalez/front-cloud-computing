import React, { useState } from "react";
import { BiUser, BiLockAlt, BiEnvelope } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  // Estados para los datos de login y registro
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
    telefono: "",
    password: "",
  });

  // Manejar cambios en los inputs de login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Manejar cambios en los inputs de registro
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Mostrar los datos por consola al enviar
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://back-final-whc4.onrender.com/api/usuarios/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const contentType = response.headers.get("content-type");
      const text = await response.text();
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Respuesta inesperada del servidor");
      }
      const data = JSON.parse(text);

      if (!response.ok) {
        throw new Error(data.error || "Error en el registro");
      }

      alert("¡Registro exitoso!");
      console.log("Datos enviados correctamente:", registerData);
      navigate("/Home"); // Redirige a /home
      setRegisterData({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        telefono: "",
        password: "",
      });
    } catch (err) {
      alert(err.message || "Error de conexión");
      console.error("Error en registro:", err);
    }
  };

  return (
    <div className="login-viewport">
      <div className={`container-login${active ? " active" : ""}`}>
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
                <a
                  href="#"
                  className="SignUpLink"
                  onClick={e => {
                    e.preventDefault();
                    setActive(true);
                  }}
                >
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
                name="nombre"
                required
                value={registerData.nombre}
                onChange={handleRegisterChange}
              />
              <label>Nombre</label>
              <BiUser />
            </div>
            <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
              <input
                type="text"
                name="apellido"
                required
                value={registerData.apellido}
                onChange={handleRegisterChange}
              />
              <label>Apellido</label>
              <BiUser />
            </div>
            <div className="input-box animation" style={{ "--li": 20, "--S": 3 }}>
              <input
                type="text"
                name="direccion"
                value={registerData.direccion}
                onChange={handleRegisterChange}
              />
              <label>Dirección</label>
              <BiUser />
            </div>
            <div className="input-box animation" style={{ "--li": 21, "--S": 4 }}>
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
            <div className="input-box animation" style={{ "--li": 22, "--S": 5 }}>
              <input
                type="text"
                name="telefono"
                value={registerData.telefono}
                onChange={handleRegisterChange}
              />
              <label>Teléfono</label>
              <BiUser />
            </div>
            <div className="input-box animation" style={{ "--li": 23, "--S": 6 }}>
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
            <div className="input-box animation" style={{ "--li": 24, "--S": 7 }}>
              <button className="btn" type="submit">Register</button>
            </div>
            <div className="regi-link animation" style={{ "--li": 25, "--S": 8 }}>
              <p>
                Already have an account? <br />
                <a
                  href="#"
                  className="SignInLink"
                  onClick={e => {
                    e.preventDefault();
                    setActive(false);
                  }}
                >
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
    </div>
  );
}

export default Login;