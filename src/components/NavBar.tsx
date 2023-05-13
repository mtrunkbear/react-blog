import React from "react";
import Login from "./Login";
import configIcon from "../assets/config-icon.svg";

const NavBar = () => {
  const title = "BLOG DE UN FULLSTRACK />";
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        background: "rgba(0, 0, 0, 0.06)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // Safari
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "5%",
        paddingLeft: "5%",
        boxSizing: "border-box",
        marginBottom: "20px",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <h1 style={{ fontSize: "34px" }}>{title}</h1>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "140px",
        }}
      >
        <Login /> <img width={20} src={configIcon} />
      </div>
    </div>
  );
};

export default NavBar;
