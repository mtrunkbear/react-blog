import { useUserContext } from "../context/UserContext";
import { useAuthentication } from "../hooks/useAuthentication";
import styled from "@emotion/styled";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  forwardRef,
  ButtonProps,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const Login: any = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogin, handleLogout } = useAuthentication();
  const { user }: any = useUserContext();

  if (!isLoggedIn) {
    return <LoginButton onClick={handleLogin}>{"Iniciar sesión"}</LoginButton>;
  } else
    return (
      <Menu>
        <MenuButton as={LoginButton} rightIcon={<ChevronDownIcon />}>
          <>
            {user?.nickName && user.nickName}
            <ChevronDownIcon />
          </>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("/@" + user.nickName)}>
            Perfil
          </MenuItem>
          <MenuItem onClick={() => navigate("/write")}>Postear</MenuItem>
          <MenuItem onClick={() => navigate("/settings")}>
            Configuraciones
          </MenuItem>
          <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
        </MenuList>
      </Menu>
    );
};
const StyledButton = styled.button`
  position: relative;
  width: 120px;
  height: 25px;
  background: rgba(217, 217, 217, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: border 0.8s linear;
  border: 0.1px solid rgba(150, 255, 200, 0.1);
  &:hover {
    border: 1px solid rgba(150, 255, 200, 1);
    transition: border 0.3s linear;
  }
`;
const LoginButton = forwardRef<ButtonProps, "div">(
  ({ onClick, children }, ref) => (
    <StyledButton onClick={onClick} ref={ref}>
      {children}
    </StyledButton>
  )
);
export default Login;
