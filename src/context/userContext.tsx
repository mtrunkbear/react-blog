import { createContext, useState, useContext } from "react";
import { useUsers } from "../hooks/useUsers";

// Crea un objeto `UserContext` con un valor inicial vacío
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
