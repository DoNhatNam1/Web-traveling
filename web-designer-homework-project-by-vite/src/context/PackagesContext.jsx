// import React, { useState, createContext } from "react";

// export const PackagesContext = createContext();

// export const PackagesContextProvider = (props) => {
//   const [packages, setPackages] = useState([]);
//   // const [selectedPackage, setSelectedPackage] = useState(null);


//   const addPackages = (packages) => {
//     setPackages([...packages, packages]);
//   };
//   return (
//     <PackagesContext.Provider
//       value={{
//         packages,
//         setPackages,
//         addPackages,
//         // selectedPackage,
//         // setSelectedPackage,
//       }}
//     >
//       {props.children}
//     </PackagesContext.Provider>
//   );
// };