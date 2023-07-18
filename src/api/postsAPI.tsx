const apiUrl = import.meta.env.VITE_API_URL;

export const createPost = async ({ title, user, content }: any) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found.");
      return false;
    }

    if (!title || !user || !content) {
      console.error("Missing required fields.");
      return false;
    }

    const response = await fetch(`${apiUrl}/api/post/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        content,
        userId: user.id,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deletePost = async ({ user, id }: any) => {
  try {
    const token = localStorage.getItem("token");
    if (user) {
      const response = await fetch(`${apiUrl}/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({
          userId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      return response;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
