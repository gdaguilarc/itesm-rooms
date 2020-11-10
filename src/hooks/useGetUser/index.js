import { API, Auth } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { useState, useEffect } from "react";

const useGetCurrentUser = () => {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { username } = await Auth.currentAuthenticatedUser();

        const response = await API.graphql({
          query: getUser,
          variables: { id: username },
        });

        setUser(response.data.getUser);
        setItems(response.data.getUser.appointments.items);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { user, error, isLoading, setUser, items, setItems };
};

export default useGetCurrentUser;
