import React, { useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/containers/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import { loginRequest } from '../actions';

const Login = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(formData);
    props.history.push('/');
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="google" /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="twitter" /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register"> Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const matDispatchToProps = {
  loginRequest,
};

export default connect(null, matDispatchToProps)(Login);
