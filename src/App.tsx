import "./App.css";
import EditorContext from "./context/editorContext";

import { useState } from "react";
import { MarkedInput } from "./components/MarkdownInput";
import { useUserContext } from "./context/userContext";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import CentralBody from "./components/CentralBody";
import SideMenu from "./components/SideMenu";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const apiUrl = import.meta.env.VITE_API_URL;

interface contextValue {
  markdownText: string;
  setMarkdownText: any;
}

const Footer = styled.div`
  height: 300px;
  background-color: blue;
  margin-top: 100px;
`;

function App() {
  
  const [markdownText, setMarkdownText] = useState<any>("");
  const { user }: any = useUserContext();
  console.log({user})

  const contextValue: contextValue = {
    markdownText,
    setMarkdownText,
  };
  //TODO: handle new post request in hook
  const handleNewPost = () => {
    if (user) {
      fetch(`${apiUrl}:4000/api/post/`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title: "by mk",
          content: markdownText,
          userId: user.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <EditorContext.Provider value={contextValue}>
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
            <Route path="/:userId" element={<Posts userId={user?.id} />} />
            <Route path="/" element={<Posts />} />
            <Route path="post" element={<Posts />}>
              <Route path=":id" element={<Posts />} />
            </Route>
          </Routes>
        </div>
        <SideMenu />
      </CentralBody>

      {/* 
      <MarkedInput setText={setMarkdownText} />
      <button onClick={handleNewPost}>SEND</button> */}
      <Footer />
    </EditorContext.Provider>
  );
}

export default App;
