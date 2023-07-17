import EditForm from "../components/EditForm";
import { Container } from "../components/Container";
import styled from "@emotion/styled";
import { device } from "../styles/device";
import { useUserContext } from "../context/UserContext";

function Settings() {
  const { user } = useUserContext();
 return (
    <SettingsContainer
      style={{
        paddingTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 40 }}>Configuraciones</h1>
      <EditForm userData={user} />
    </SettingsContainer>
  );
}

const SettingsContainer = styled(Container)`
  margin: 0;
  box-sizing: content-box;
  margin-top: 160px;
  width: 88vw;
  @media ${device.laptop} {
    width: 40vw;
    margin-top: 0;
  }
`;

export default Settings;
