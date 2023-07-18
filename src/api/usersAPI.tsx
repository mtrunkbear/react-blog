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
    return response;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};

export const updateUser = async (userData: any) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token available");
    }

    const response = await fetch(`${API_URL}/api/users/me`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("No autorizado");
    }

    return true;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return false;
  }
};

export const getCurrentUser = async ({ navigate }: any) => {
  const token = localStorage.getItem("token");
  let userData;

  try {
    if (!token) {
      throw new Error("No token available");
    }
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
    return null;
  }
};
