import React, { createContext, useContext, useState } from 'react';

// a new context is created called user context using the create context function
const UserContext = createContext();

 // Initializing the user info here
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
