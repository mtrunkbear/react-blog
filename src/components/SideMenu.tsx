import styled from "@emotion/styled";
import AutorDetail from "./AuthorDetail";
import ArticlesMenu from "./ArticlesMenu";
import { device } from "../styles/device";
import { useFocusedPostContext } from "../context/focusedPostContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useColorMode } from "@chakra-ui/react";

const SideMenu = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { pathname } = useLocation();
  const { users }: any = useUserContext();
  const [focusedPost]: any = useFocusedPostContext();
  const [actualUser, setActualUser] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    description: "",
    id: "",
    nickName: "",
  });

  useEffect(() => {
    if (users) {
      const userOfNickName =
        pathname &&
        users.find(
          ({ nickName }: any) =>
            nickName.toLowerCase() === pathname?.slice(2).toLocaleLowerCase() &&
            nickName.toLowerCase() !== ""
        );
      if (userOfNickName) {
        setActualUser(userOfNickName);
      } else if (users && focusedPost) {
        const userOfFocusedPost = users.find(
          ({ id }: any) => id == focusedPost.userId
        );
        if (userOfFocusedPost) {
          setActualUser(userOfFocusedPost);
        }
      }
    }
  }, [focusedPost, users, pathname]);

  const { firstName, lastName, occupation, description, id, nickName } =
    actualUser;
if(pathname.includes("write")) return  null;
  return (
    <SideMenuContainer
      style={{
        backgroundColor: isDark
          ? "rgba(82, 5, 133, 0.4)"
          : "rgb(157, 188, 191)",
        ...{ color: !isDark ? "white" : undefined },
      }}
    >
      <AutorDetail
        firstName={firstName}
        lastName={lastName}
        occupation={occupation}
        description={description}
        nickName={nickName}
        id={id}
      />
      <ArticlesMenu />
    </SideMenuContainer>
  );
};

const SideMenuContainer = styled.div`
  display: none;
  position: sticky;
  flex-direction: column;
  background-color: rgba(82, 5, 133, 0.4);
  width: 300px;
  min-width: 300px;
  padding-left: 2%;
  padding-right: 2%;
  height: 710px;
  border-radius: 45px;
  justify-content: space-evenly;
  align-items: center;
  top: 100px;
  transition: top 0.4s linear;

  @media ${device.laptopM} {
    display: flex;
  }
`;

export default SideMenu;
