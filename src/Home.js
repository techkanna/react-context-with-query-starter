import { useState, memo, createContext, useContext } from "react";
import { QueryClient, QueryClientProvider,useQuery } from "react-query";

export default function Home() {
  return (
    <UserProvider>
      <HomeContent />
    </UserProvider>
  );
}

const HomeContent = memo(() => {
  return (
    <div>
      <UserPicker />
      <UserDetails />
    </div>
  );
});

const userContext = createContext();

function UserProvider({ children }) {
  const [userId, setUserId] = useState("1");
  const queryClient = new QueryClient()
  return (
    <userContext.Provider value={{ userId, setUserId }}>
       <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </userContext.Provider>
  );
}

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

function UserPicker() {
  const { userId, setUserId } = useContext(userContext);

  return (
    <select
      value={userId}
      onChange={(event) => {
        setUserId(event.target.value);
      }}
    >
      <option value="1">Leanne Graham</option>
      <option value="2">Ervin Howell</option>
      <option value="3">Clementine Bauch</option>
    </select>
  );
}
