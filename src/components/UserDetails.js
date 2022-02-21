import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { userContext } from '../context/context';

const fetchUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId.queryKey[0]}`
  );
  const data = await response.json();
  return data;
}


function UserDetails() {
  const { userId } = useContext(userContext);
  const {data , isLoading, error} = useQuery([userId],fetchUser);


  if (isLoading) return <span>loading...</span>;
  if (error) return <span>oop!! error occurred</span>;

  return (
    <div>
      <h1>{userId}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default UserDetails