import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useAuthentication } from "../hooks/useAuthentication";
import styled from "styled-components";

const API_URL = import.meta.env.VITE_API_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

const Login: any = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useAuthentication();
  const { user } = useUserContext();
//WIP: user menu when is logged in
  function handleOnChangeSelect(e) {
    e.preventDefault();
    console.log({ value: e.target.value });
    const value = e.target.value;

    const optionObject = {
      logout: handleLogout,
    };
    optionObject[value]();
  }

  if (!isLoggedIn) {
    return <LoginButton onClick={handleLogin}>{"Iniciar sesión"}</LoginButton>;
  } else
    return (
      <LoginButton /* */>
        <Select onChange={(e) => handleOnChangeSelect(e)}>
          <option
            style={{
              backgroundColor: "red",
              width: "130px",
              display: "flex",
            }}
          >
            {user && user.nickName}
          </option>
          <option>{user && user.nickName}</option>
          <option value="logout">{"Cerrar Sesión"}</option>
        </Select>
      </LoginButton>
    );
};
const StyledButton = styled.button`
  width: 115px;
  height: 25px;
  background: rgba(217, 217, 217, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: border 0.8s linear;
  border: 0.1px solid rgba(150, 255, 200, 0.1);
  &:hover {
    border: 1px solid rgba(150, 255, 200, 1);
    transition: border 0.3s linear;
  }
`;
const Select = styled.select`
  // disable default appearance
  transform: translateX(-5px);
  border: none;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 110%;
  align-items: center;
  text-align: center;
  &:focus {
    background-color: rgba(217, 217, 217, 0.15);
    width: 110%;
  }
  &:hover {
    background-color: rgba(217, 217, 217, 0.15);
  }
`;
const LoginButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Login;
