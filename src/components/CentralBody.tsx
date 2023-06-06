import styled from "@emotion/styled";
import { device } from "../styles/device";

const Main = styled.main`
  width: 100%;

  flex-direction: row;
  margin-top: 150px;
  justify-content: center;
  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
    display: flex;
    width: 100%;
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
