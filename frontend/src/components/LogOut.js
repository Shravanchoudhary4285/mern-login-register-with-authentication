import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    Navigate("/");
  });
  return <div></div>;
}

export default LogOut;
