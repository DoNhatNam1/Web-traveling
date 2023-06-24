import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);

    const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingLoading, setIsSearchingLoading] = useState(false);

  const addUsers = (users) => {
    setUsers([...users, users]);
  };
  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        addUsers,
        searchData,
        setSearchData,
        isSearching,
        setIsSearching,
        isSearchingLoading,
        setIsSearchingLoading,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};