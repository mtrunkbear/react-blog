import styled from "styled-components";
import { CategoriesButton } from "./Buttons";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import next from "../assets/next.png";
import chatgpt from "../assets/chatgpt.svg";
import all from "../assets/all.png";

const Categories = () => {
  const categories = [
    { name: "React", icon: react },
    { name: "NodeJs", icon: node },
    { name: "Next.js", icon: next },
    { name: "AI", icon: chatgpt },
    { name: "Todos", icon: all },
  ];

  return (
    <nav style={{width:"90%", height: "50px", marginBottom: "60px" }}>
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
        {categories.map(({ name, icon }: any) => (
          <CategoriesButton key={name} filterColor={"violet"} >
            <li style={{ display: "flex", justifyContent: "space-evenly", width:"80%" }}>
              <img src={icon} width={22} />
              {name.toUpperCase()}
            </li>
          </CategoriesButton>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
