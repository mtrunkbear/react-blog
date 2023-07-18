import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AlertContext } from "../context/AlertContext";
import { keyframes } from "@emotion/react";
import { Alert } from "../types/alertContext.types";

const Alert: React.FC = () => {
  const { alert, hideAlert } = useContext<any>(AlertContext);

  if (!alert) {
    return null;
  }

  return (
    <AlertContainer type={alert.type}>
      <Message>{alert.message}</Message>
      <CloseButton onClick={hideAlert}>Cerrar</CloseButton>
    </AlertContainer>
  );
};
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5%);
  }
  60% {
    transform: translateY(-2%);
  }
`;

const AlertContainer = styled.div<{ type: Alert["type"] }>`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ type }) => getAlertColor(type)};
  color: #fff;
  animation: ${fadeInUp} 0.4s ease-in-out, ${bounce} 0.5s ease-in-out 0.5s;
`;

const Message = styled.span``;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const getAlertColor = (type: Alert["type"]) => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "warning":
      return "#ff9800";
    case "error":
      return "#f44336";
    default:
      return "#2196f3";
  }
};

export default Alert;
