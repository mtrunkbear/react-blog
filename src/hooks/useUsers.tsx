import { useState, useEffect } from "react";
import { getUsers,/* updateUser, */ getCurrentUser } from "../api/usersAPI";
import { useNavigate } from "react-router";

export const useUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
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
    const fetchCurrentUser = async () => {
      const fetchedUser = await getCurrentUser({ navigate });
      if (fetchedUser) {
        setCurrentUser(fetchedUser);
        setLoadingCurrentUser(false);
      }
    };
    if (loadingCurrentUser) {
      fetchCurrentUser();
    }
  }, [loadingCurrentUser]);


  return {
    users,
    currentUser,
    setCurrentUser,
    loadingCurrentUser,
    setLoadingCurrentUser /* handleUpdateUser */,
  };
};
