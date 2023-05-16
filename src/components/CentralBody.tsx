import styled from "styled-components";
import { device } from "../styles/device";

const Main = styled.main`
  width: 100%;

  flex-direction: row;
  /* justify-content: space-evenly; */
  margin-top: 100px;
/*   background-color: red; */
  box-sizing: border-box;

  /* @media ${device.mobileS} {
    width: 100%;
  } */
  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
    display: flex;
    width: 1000px;
  }
  @media ${device.laptopL} {
    width: 1300px;
  }

  @media ${device.desktop} {
    width: 1300px;
  }
`;

const CentralBody = ({ children }: any) => {
  return <Main>{children}</Main>;
};

export default CentralBody;
