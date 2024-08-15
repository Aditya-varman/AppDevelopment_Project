import { createContext, useContext, useState } from "react";

// Create the user context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // State to store the user ID
  const [userId, setUserId] = useState(null);

  // Function to update the user ID
  const updateUserId = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
