import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import APIURL from "../Assets/Assets";
function Signup() {
  const Navigate = useNavigate("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log(name, email, password);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      email: email,
      password: password,
    };
    const response = await axios.post(`${APIURL}/register`, params);
    alert(response.data.message);
    if (response.data.status === true) {
      Navigate("/");
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

      <h1 style={{ textAlign: "center" }}>SignUp </h1>
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
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
          SignUp
        </Button>
      </Form>
    </>
  );
}

export default Signup;
