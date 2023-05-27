import styled from "styled-components";
import AutorDetail from "./AutorDetail";
import ArticlesMenu from "./ArticlesMenu";
import { device } from "../styles/device";
import { useFocusedPostContext } from "../context/focusedPostContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";

const SideMenu = () => {
  const { pathname } = useLocation();
  const { user, users }: any = useUserContext();
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
      console.log({
        pathname,
        nickName: pathname?.slice(2).toLocaleLowerCase(),
      });
      const userOfNickName =
        pathname &&
        users.find(
          ({ nickName }: any) =>
            nickName.toLowerCase() === pathname?.slice(2).toLocaleLowerCase() &&
            nickName.toLowerCase() !== ""
        );
      console.log({ userOfNickName });
      console.log({ focusedPost });
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

  return (
    <SideMenuContainer>
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
