import styled from "@emotion/styled";
import Login from "./Login";
import configIcon from "../assets/config-icon.svg";
import { device } from "../styles/device";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const title = "Jotter />";
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //To fix bug of initial color mode in chakra-ui
  useEffect(() => {
    const colorMode = localStorage.getItem("chakra-ui-color-mode");
    if (!colorMode) {
      //set Initial color mode
      localStorage.setItem("chakra-ui-color-mode", "dark");
    }
  }, []);

  return (
    <Nav>
      <Title style={{ color: isDark ? undefined : "rgb(0, 120,100" }}>
        {title}
      </Title>
      <NavElements>
        <IconButton
          aria-label="Toggle Dark Mode"
        size={"sm"}
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <Login />
        <ConfigIcon onClick={()=> navigate("/write")} src={configIcon} />
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
    width: 100%;
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
  width: 55%;
  @media ${device.mobileM}{
    width: 60%;
  }
  @media ${device.mobileL}{
    width: 50%;
  }
  @media ${device.mobileXL}{
    width: 40%;
  }
  @media ${device.tablet}{
    width: 300px;
  }
  
`;

const ConfigIcon = styled.img`
  width: 20px;
`;

export default NavBar;
