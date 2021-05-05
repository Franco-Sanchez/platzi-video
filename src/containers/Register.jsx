import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/containers/Register.scss";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import Header from "../components/Header";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(formData);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <input
              name="email"
              value={formData.email}
              className="input"
              type="email"
              placeholder="Correo"
              onChange={handleChange}
            />
            <input
              name="password"
              value={formData.password}
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const matchDispatchToProps = {
  registerRequest,
};

export default connect(null, matchDispatchToProps)(Register);
