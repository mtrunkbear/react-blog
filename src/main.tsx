import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./context/userContext.tsx";
import { BrowserRouter } from "react-router-dom";
import ActualPostProvider from "./context/actualPostContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ActualPostProvider>
          <App />
        </ActualPostProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
