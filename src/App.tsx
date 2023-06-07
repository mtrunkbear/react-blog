import "./App.css";
import EditorContext from "./context/editorContext";


import { MarkdownInput } from "./components/MarkdownInput"; 

import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import CentralBody from "./components/CentralBody";
import SideMenu from "./components/SideMenu";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";





function App() {

  return (<>
      <NavBar />
      <CentralBody>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
            alignItems: "center",
          }}
        >
          <Categories />
          {/*TODO: handle routes in a config or something similar to improve cleancode*/}
          <Routes>
            <Route path="/:userNickName" element={<Posts />} />
            <Route path="/" element={<Posts />} />
            <Route path="/post" element={<Posts />}>
              <Route path=":id" element={<Posts />} />
             
            </Route>
            <Route path="/write" element={<MarkdownInput/>} />
          </Routes>
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
