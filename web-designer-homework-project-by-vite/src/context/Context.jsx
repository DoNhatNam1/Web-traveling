import React, { useState, createContext } from "react";
// import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);

    const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingLoading, setIsSearchingLoading] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [dashboardShowNLoginSuccess, setDashboardShowLoginSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('isLoggedIn'))
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const login = (user) => {
    setDashboardShowLoginSuccess(true);
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

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
        isLoggedIn,
        userData,
        registerStatus,
        dashboardShowNLoginSuccess,
        setUsers,
        setSearchData,
        setIsSearching,
        setIsSearchingLoading,
        setPackages,
        setUserAccounts,
        setIsLoggedIn,
        setRegisterStatus,
        setDashboardShowLoginSuccess,
        addUsers,
        addPackages,
        addUserAccounts,
        login,
        logout
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};