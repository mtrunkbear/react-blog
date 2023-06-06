import { CategoriesButton } from "./Buttons";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import next from "../assets/next.png";
import chatgpt from "../assets/chatgpt.svg";
import all from "../assets/all.png";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const categories = [
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "Next.js", icon: next },
    { name: "AI", icon: chatgpt },
    { name: "Todos", icon: all, action: ()=>navigate("/") },
  ];

  return (
    <nav style={{ width: "90%", height: "50px", marginBottom: "60px" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          paddingLeft: 0,
          alignItems: "center",
          height: "100%",
          margin: 0,
        }}
      >
        {categories.map(({ name, icon,action }: any) => (
          <CategoriesButton
          onClick={() =>action()}
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
                style={name == "Next.js" &&!isDark ? { filter: " invert(1)" } : undefined}
              />
              {name.toUpperCase()}
            </li>
          </CategoriesButton>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
