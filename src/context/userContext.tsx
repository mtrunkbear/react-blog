import { createContext,  useContext } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);
export const UserProvider = ({ children }: any) => {
  const { currentUser, loadingCurrentUser, setLoadingCurrentUser, users } =
    useUsers();

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        users,
        loadingCurrentUser,
        setLoadingCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
