const apiUrl = import.meta.env.VITE_API_URL;

export const createPost = ({ title, user, content }: any) => {
  const token = localStorage.getItem("token");
  if (user) {
    fetch(`${apiUrl}/api/post/`, {
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
    })
      .then((response) => response.json())
      .then((data) => (window.location.href = "/post/" + data.id))
      .catch((error) => {
        console.error(error);
      });
  }
};

export const deletePost = ({ user, id, callback }: any) => {
  const token = localStorage.getItem("token");
  if (user) {
    fetch(`${apiUrl}/api/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        userId: user.id,
      }),
    })
      .then((response) => response.ok)
      .then((ok) => {
        if (ok) {
          callback();
        } else {
          throw new Error("Response failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
