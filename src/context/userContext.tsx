import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

// Crea un objeto `UserContext` con un valor inicial vacío
export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);
// Crea un componente `UserProvider` para envolver la aplicación y proporcionar un valor al contexto
export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({ id: null, mail: null });

  useEffect(() => {
    // Verificamos si el token JWT está presente en el almacenamiento local
    const token = localStorage.getItem("token");

    // Si el token está presente, enviamos una solicitud al backend para validar el token y obtener los datos del usuario
    fetch(`${apiUrl}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        localStorage.removeItem("token");
        //setToken(undefined);
        console.log(error);
      });
  }, []);
  // Retorna el proveedor del contexto con el valor actualizado del usuario y la función de actualización
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
