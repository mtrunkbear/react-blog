import React, { createContext, useReducer, useContext, ReactNode } from "react";
import {
  AlertAction,
  AlertContextProps,
  AlertState,
} from "../types/alertContext.types";

const AlertContext = createContext<AlertContextProps>({} as any);

const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        alert: action.payload,
        showAlert: true,
      };
    case "HIDE_ALERT":
      return {
        ...state,
        alert: null,
        showAlert: false,
      };
    default:
      return state;
  }
};

const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {
    alert: null,
    showAlert: false,
  });

  const showAlert: AlertContextProps["showAlert"] = (
    message: string,
    type: "info" | "success" | "warning" | "error" = "info"
  ) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: { message, type },
    });
  };

  const hideAlert = () => {
    dispatch({ type: "HIDE_ALERT" });
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
const useAlertContext = () => useContext(AlertContext);

export { AlertContext, AlertProvider, useAlertContext };
