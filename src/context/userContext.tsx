import { createContext, useState, useContext } from "react";
import { useUsers } from "../hooks/useUsers";

// Crea un objeto `UserContext` con un valor inicial vacío
export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);
// Crea un componente `UserProvider` para envolver la aplicación y proporcionar un valor al contexto
export const UserProvider = ({ children }: any) => {
  const { currentUser, loadingCurrentUser, setLoadingCurrentUser } = useUsers();

  // Retorna el proveedor del contexto con el valor actualizado del usuario y la función de actualización
  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        loadingCurrentUser,
        setLoadingCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
