import { useState, useEffect } from "react";
import { getUsers, getCurrentUser } from "../api/usersAPI";

export const useUsers = () => {
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
      const fetchedUser = await getCurrentUser();
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
    setLoadingCurrentUser 
  };
};
