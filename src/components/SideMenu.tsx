import styled from "styled-components";
import AutorDetail from "./AutorDetail";
import ArticlesMenu from "./ArticlesMenu";
import { device } from "../styles/device";
import { useActualPostContext } from "../context/actualPostContext";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";

const SideMenu = () => {
  const { user, users }: any = useUserContext();
  const [actualPost]: any = useActualPostContext();
  const [actualUser, setActualUser] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    description: "",
    id: "",
    nickName: "",
  });

  useEffect(() => {
    console.log({ userFromSide: user });
    if (users) {
      const userOfFocusedPost = users.find(
        ({ id }: any) => id == actualPost.userId
      );
      if (userOfFocusedPost) {
        setActualUser(userOfFocusedPost);
      }
    }
  }, [actualPost, users]);

  const { firstName, lastName, occupation, description, id, nickName } =
    actualUser;

  console.log({ actualUser });

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
  
  @media ${device.laptop} {
    display: flex;
  } 
  /* @media ${device.mobileM} {
    top: 100;
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 100%;
    position: fixed;
     box-sizing: border-box; 
  }
  /*  @media ${device.tablet} {
    display: none;
  }
 */ */
  
  /* @media ${device.laptopL} {
    display: flex;
  } */
 

`;

export default SideMenu;
