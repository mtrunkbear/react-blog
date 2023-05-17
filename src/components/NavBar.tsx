/* import React from "react";
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
        top:0,
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
 */

import React from "react";
import styled from "styled-components";
import Login from "./Login";
import configIcon from "../assets/config-icon.svg";
import { device } from "../styles/device";

const NavBar = () => {
  const title = "BLOG DE UN FULLSTRACK />";

  return (
    <Nav>
      <Title>{title}</Title>
      <NavElements>
        <Login />
        <ConfigIcon src={configIcon} />
      </NavElements>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
  padding-left: 5%;
  margin-bottom: 20px;
  top: 0;
  z-index: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari */
  box-sizing: border-box;

  @media ${device.laptop} {
    width: 1000px;
  }
  @media ${device.laptopL} {
    width: 1300px;
  }

  @media ${device.desktop} {
    width: 1500px;
  }
`;

const Title = styled.h1`
  font-size: 20px;

  @media ${device.mobileS} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 34px;
  }
`;

const NavElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
`;

const ConfigIcon = styled.img`
  width: 20px;
`;

export default NavBar;
