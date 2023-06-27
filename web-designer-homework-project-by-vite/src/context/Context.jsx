import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);

    const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingLoading, setIsSearchingLoading] = useState(false);

  const addUsers = (users) => {
    setUsers([...users, users]);
  };
  const addPackages = (packages) => {
    setPackages([...packages, packages]);
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
        packages,
        setPackages,
        addPackages,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};