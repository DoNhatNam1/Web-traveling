import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);

    const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingLoading, setIsSearchingLoading] = useState(false);

  const addUsers = (users) => {
    setUsers([...users, users]);
  };
  const addPackages = (packages) => {
    setPackages([...packages, packages]);
  };

  const addUserAccounts = (userAccounts) => {
    setUserAccounts([...userAccounts, userAccounts]);
  };
  
  return (
    <Context.Provider
      value={{
        users,
        searchData,
        isSearching,
        isSearchingLoading,
        packages,
        userAccounts,
        setUsers,
        setSearchData,
        setIsSearching,
        setIsSearchingLoading,
        setPackages,
        setUserAccounts,
        addUsers,
        addPackages,
        addUserAccounts,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};