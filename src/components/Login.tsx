import { useUserContext } from "../context/userContext";
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

const Login: any = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useAuthentication();
  const { user }: any = useUserContext();
  //WIP: user menu when is logged in

  if (!isLoggedIn) {
    return <LoginButton onClick={handleLogin}>{"Iniciar sesión"}</LoginButton>;
  } else
    return (
      <Menu>
        <MenuButton as={LoginButton} rightIcon={<ChevronDownIcon />}>
          <>
            {user && user.nickName}
            <ChevronDownIcon />
          </>
        </MenuButton>
        <MenuList>
          <MenuItem>Postear</MenuItem>
          <MenuItem>Configuraciones</MenuItem>
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

/* const LoginButton =({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}; */

export default Login;
