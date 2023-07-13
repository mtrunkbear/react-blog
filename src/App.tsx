import "./App.css";
import NavBar from "./components/NavBar";
import CentralBody from "./components/CentralBody";
import SideMenu from "./components/SideMenu";
import Categories from "./components/Categories";
import styled from "@emotion/styled";

import { size as windowSizes } from "./styles/device";
import useWindowPosition from "./hooks/useWindowPosition";
import Router from "./pages/router";

function App() {
  const { viewportWidth } = useWindowPosition();
  const isMobile = viewportWidth <= parseFloat(windowSizes.laptop);

  return (
    <>
      <NavBar />
      {isMobile && <Categories />}
      <CentralBody>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            alignItems: "center",
          }}
        >
          {!isMobile && <Categories />}         
          <Router/>
        </div>
        <SideMenu />
      </CentralBody>
      <Footer />
    </>
  );
}

const Footer = styled.div`
  height: 300px;
  background-color: blue;
  margin-top: 100px;
`;

export default App;
