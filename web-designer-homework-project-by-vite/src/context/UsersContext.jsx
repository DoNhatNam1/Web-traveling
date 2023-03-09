import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);


  const addUsers = (users) => {
    setUsers([...users, users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        addUsers,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};