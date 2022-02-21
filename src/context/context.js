import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const userContext = createContext();

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

export default UserProvider