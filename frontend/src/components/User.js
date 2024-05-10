import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import APIURL from "../Assets/Assets";
function User() {
  const Navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const Getdata = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${APIURL}/user`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (response.data.status === 401) {
      localStorage.clear();
      alert(response.data.message);
      Navigate("/");
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
      <Header></Header>
      <h1 className="text-center">Welcome To Home Page</h1>
      <center className="m-5">
        <img src="user.jpg" alt="profile" height={100} />
        <h2>Name :{name}</h2>
        <h2>Email :{email}</h2>
      </center>
    </>
  );
}

export default User;
