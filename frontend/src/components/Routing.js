import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import User from "./User";
import LogOut from "./LogOut";
import Error from "./Error";
function Routing() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Header />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/*" element={<Error />}></Route>

      </Routes>
    </>
  );
}

export default Routing;
