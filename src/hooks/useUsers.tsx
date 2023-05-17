import { useState, useEffect } from "react";
import { getUsers,/* updateUser, */ getCurrentUser } from "../api/usersAPI";
import { useNavigate } from "react-router";

export const useUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [loadingCurrentUser, setLoadingCurrentUser] = useState(true);

   useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []); 

  useEffect(() => {
    console.log("PASAAA")
    const fetchCurrentUser = async () => {
      const fetchedUser = await getCurrentUser({ navigate });
      console.log({fetchedUser})
      if (fetchedUser) {
        setCurrentUser(fetchedUser);
        setLoadingCurrentUser(false);
      }
    };
    if (loadingCurrentUser) {
      fetchCurrentUser();
    }
  }, [loadingCurrentUser]);

  /*  const handleUpdateUser = async (id, userData) => {
    const updatedUser = await updateUser(id, userData);
    if (updatedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedUser : user))
      );
    }
  }; */

  return {
    users,
    currentUser,
    setCurrentUser,
    loadingCurrentUser,
    setLoadingCurrentUser /* handleUpdateUser */,
  };
};
