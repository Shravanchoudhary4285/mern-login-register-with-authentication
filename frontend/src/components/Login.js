import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import APIURL from "../Assets/Assets";
function Login() {
  const Navigate = useNavigate("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${APIURL}/login`, params);
    if (response.data.status === true) {
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("email", email);
      localStorage.setItem("token", response.data.token);

      alert(response.data.message);
      Navigate("/user");
    } else {
      alert(response.data.message);
      window.location.reload();
    }
  };
  // for private route
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      Navigate("/user");
    }
  }, []);
  return (
    <>
      <Header></Header>
      <h1 style={{ textAlign: "center" }}>LogIn </h1>

      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </>
  );
}

export default Login;
