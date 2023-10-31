import React, { useState, createContext } from "react";
import {useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const [userAccountsSendingDelMess, setUserAccountsSendingDelMess] = useState([]);
  const[passwordFromDb, SetPasswordFromDb] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingLoading, setIsSearchingLoading] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [dashboardShowNLoginSuccess, setDashboardShowLoginSuccess] = useState(false);
  const [dashboardShowChangePassSuccess, setDashboardShowChangePassSuccess] = useState(false);
  const [dashboardShowSendingDelMessSucss, setDashboardShowSendingDelMessSucss] = useState(false);
  const [dashboardShowSendingDelMessFail, setDashboardShowSendingDelMessFail] = useState(false);
  const [dashboardShowSendingDelMessInOneDay, setDashboardShowSendingDelMessInOneDay] = useState(false);
  const [isOpenPopupRequestUserDashboard, setIsOpenPopupRequestUserDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('isLoggedIn'))
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const closePopupUserDashboard = () => {
    setIsOpenPopupRequestUserDashboard(false);
  };

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

  const addUserAccountsSendingDelMess = (userAccountsSendingDelMess) => {
    setUserAccountsSendingDelMess([...userAccountsSendingDelMess, userAccountsSendingDelMess]);
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
        dashboardShowChangePassSuccess,
        passwordFromDb,
        isOpenPopupRequestUserDashboard,
        dashboardShowSendingDelMessSucss,
        dashboardShowSendingDelMessFail,
        dashboardShowSendingDelMessInOneDay,
        setUsers,
        setSearchData,
        setIsSearching,
        setIsSearchingLoading,
        setPackages,
        setUserAccounts,
        setIsLoggedIn,
        setRegisterStatus,
        setDashboardShowLoginSuccess,
        setDashboardShowChangePassSuccess,
        SetPasswordFromDb,
        setIsOpenPopupRequestUserDashboard,
        setDashboardShowSendingDelMessSucss,
        setDashboardShowSendingDelMessFail,
        setDashboardShowSendingDelMessInOneDay,
        addUsers,
        addPackages,
        addUserAccounts,
        addUserAccountsSendingDelMess,
        login,
        logout,
        closePopupUserDashboard,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};