import styled from "@emotion/styled";
import { device } from "../styles/device";


const CentralBody = ({ children }: any) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  display: flex;
  width: 100%;

  flex-direction: row;

  justify-content: center;

  @media ${device.mobileS} {
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 0px;
  }

/*   @media ${device.tablet} {
    flex-direction: row;
    width: 100%;
    margin-top: 150px;
  }
 */
  @media ${device.laptop} {
    flex-direction: row;
    width: 100%;
    margin-top: 150px;
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
export default CentralBody;
