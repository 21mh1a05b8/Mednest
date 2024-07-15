import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Register() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const onUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFile(file);
    } else {
      toast.error("Please select an image in jpeg or png format");
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { firstname, lastname, email, password, confpassword } = formDetails;

    if (!firstname || !lastname || !email || !password || !confpassword) {
      setLoading(false);
      return toast.error("Input field should not be empty");
    } else if (firstname.length < 3) {
      setLoading(false);
      return toast.error("First name must be at least 3 characters long");
    } else if (lastname.length < 3) {
      setLoading(false);
      return toast.error("Last name must be at least 3 characters long");
    } else if (password.length < 5) {
      setLoading(false);
      return toast.error("Password must be at least 5 characters long");
    } else if (password !== confpassword) {
      setLoading(false);
      return toast.error("Passwords do not match");
    }

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confpassword", confpassword);
    if (file) {
      formData.append("profilepic", file);
    }

    try {
      await toast.promise(
        axios.post("/user/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        {
          pending: "Registering user...",
          success: "User registered successfully",
          error: "Unable to register user",
        }
      );
      navigate("/login");
    } catch (error) {
      toast.error("Error occurred while registering user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading">Sign Up</h2>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          />
          <input type="file" name="profilepic" className="form-input" onChange={onUpload} />
          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <NavLink to="/login" className="form-link">
            Already have an account? Login here.
          </NavLink>
        </form>
      </div>
    </section>
  );
}

export default Register;
