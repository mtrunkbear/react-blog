import { CategoriesButton } from "./Buttons";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import next from "../assets/next.png";
import chatgpt from "../assets/chatgpt.svg";
import all from "../assets/all.png";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { device, size as windowSizes } from "../styles/device";

const Categories = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const categories = [
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "Next.js", icon: next },
    { name: "AI", icon: chatgpt },
    { name: "Todos", icon: all, action: () => navigate("/") },
  ];

  return (
    <CategoriesContainer>
      <CategoriesUl>
        {categories.map(({ name, icon, action }: any) => (
          <CategoriesButton
            onClick={() => action()}
            key={name}
            filterColor={isDark ? "violet" : "green"}
            style={
              isDark
                ? undefined
                : {
                    background: "rgba(157, 188, 191,0.4)",
                    color: "rgba(82, 109, 130,1)",
                  }
            }
          >
            <li
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "80%",
              }}
            >
              <img
                src={icon}
                width={22}
                style={
                  name == "Next.js" && !isDark
                    ? { filter: " invert(1)" }
                    : undefined
                }
              />
              {name.toUpperCase()}
            </li>
          </CategoriesButton>
        ))}
      </CategoriesUl>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.nav`
  display: flex;
 height: 85px;
  margin-bottom: "60px";
  margin-top: 70px;
  box-sizing: content-box;
  width: 95%;
  @media ${device.laptop} {
    width: 90%;
    margin-top: 0;
    height: 50px;
  }
`;

const CategoriesUl = styled.ul`
 
  list-style-type: none;
  padding-left: 0;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${device.mobileS} {
    display: grid;
    box-sizing: content-box;
    grid-template-columns: repeat(3, 29%);
    grid-gap: 0px 20px;
  }
  @media ${device.mobileL} {
    display:flex;
    flex-direction: row;
  }
`;
export default Categories;
