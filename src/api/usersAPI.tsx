const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No autorizado");
        }
        return response.json();
      })
      .then((data) => data);
    console.log({ users: response });
    return response;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};

//WIP:
/*
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return null;
  }
}; */

export const getCurrentUser = async ({ navigate }: any) => {
  const token = localStorage.getItem("token");
  let userData;
  if (token) {
    try {
      userData = await fetch(`${API_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("No autorizado");
          }
          return response.json();
        })
        .then((data) => data);
        
      return userData;
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/", { replace: false });
      //setToken(undefined);
      console.error("Error al obtener el usuario actual:", error);
      return null;
    }
  }
};
