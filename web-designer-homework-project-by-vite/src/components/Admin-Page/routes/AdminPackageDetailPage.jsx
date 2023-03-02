// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { PackagesContext } from '../../../context/PackagesContext'
// import backendUrl from "../../../apis/backend-url";

// const PackageDetailPage = () => {
//   const { id } = useParams();
//   const { selectedPackage, setSelectedPackage } = useContext(
//     PackagesContext
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await backendUrl.get(`/${id}`);
//         console.log(response);

//         setSelectedPackage(response.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       {selectedPackage}
//     </div>
//   );
// };

// export default PackageDetailPage;