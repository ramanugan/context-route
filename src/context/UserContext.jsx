/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}

    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext) 
