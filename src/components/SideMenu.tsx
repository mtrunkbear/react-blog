import styled from "@emotion/styled";
import AutorDetail from "./AuthorDetail";
import ArticlesMenu from "./ArticlesMenu";
import { device, size as windowSizes } from "../styles/device";
import { useFocusedPostContext } from "../context/FocusedPostContext";
import { useUserContext } from "../context/UserContext";

import { useLocation } from "react-router";
import { useColorMode } from "@chakra-ui/react";
import useWindowPosition from "../hooks/useWindowPosition";
import useActualUser from "../hooks/useActualUser";

const SideMenu = () => {
  const { viewportWidth } = useWindowPosition();
  const isMobile = viewportWidth <= parseFloat(windowSizes.laptop);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { pathname } = useLocation();
  const { users }: any = useUserContext();
  const [focusedPost]: any = useFocusedPostContext();

  const actualUser = useActualUser(users, focusedPost, pathname);

  const { firstName, lastName, occupation, description, id, nickName, avatarUrl } =
    actualUser;

  const sideMenuContainerBackgroundColor = !isMobile
    ? isDark
      ? "rgba(82, 5, 133, 0.4)"
      : "rgb(157, 188, 191)"
    : undefined;

  if (
    pathname.includes("write") ||
    pathname.includes("settings") ||
    (isMobile && !pathname.includes("@"))
  )
    return null;
  return (
    <SideMenuContainer
      style={{
        backgroundColor: sideMenuContainerBackgroundColor,
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
        avatarUrl={avatarUrl}
      />
      {!isMobile && <ArticlesMenu />}
    </SideMenuContainer>
  );
};

const SideMenuContainer = styled.div`
  display: none;
  position: sticky;
  flex-direction: column;

  padding-left: 2%;
  padding-right: 2%;

  border-radius: 45px;
  justify-content: space-evenly;
  align-items: center;

  transition: top 0.4s linear;
  @media ${device.mobileS} {
    top: 0;
    position: relative;
    display: flex;
  }
  @media ${device.laptop} {
    top: 110px;
    position: sticky;
    display: flex;
    background-color: rgba(82, 5, 133, 0.4);
    width: 300px;
    min-width: 300px;
    height: 710px;
  }

  @media ${device.laptopM} {
    display: flex;
  }
`;

export default SideMenu;
