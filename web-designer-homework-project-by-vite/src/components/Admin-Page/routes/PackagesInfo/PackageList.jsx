// import React, { useEffect, useContext } from "react";
// import { PackagesContext } from '../../../../context/PackagesContext'
// import backendUrl from '../../../../apis/backend-url';
// import { useNavigate } from "react-router-dom";
// import '../ADMIN_ONLY/AdminPage/adminPage.css'

// const PackageList = (props) => {
//     const { packages, setPackages } = useContext(PackagesContext);
//     let navigate = useNavigate();
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await backendUrl.get("/");
//           console.log(response.data.data);
//           setPackages(response.data.data.packages);
//         } catch (err) {}
//       };
  
//       fetchData();
//     }, []);

//     const handleDelete = async (e, id) => {
//         e.stopPropagation();
//         try {
//           const response = await backendUrl.delete(`/${id}`);
//           setPackages(
//             packages.filter((packages) => {
//               return packages.id !== id;
//             })
//           );
//         } catch (err) {
//           console.log(err);
//         }
//       };

//       const handleUpdate = (e, id) => {
//         e.stopPropagation();
//         navigate(`/admin/${id}/update`);
//       };
    
//       // const handlePackageSelect = (id) => {
//       //   navigate(`/admin/packages/${id}`);
//       // };

//   return (
//     <div className="list-group">
//       <table className="table-container">
//         <thead>
//           <tr className="bg-primary">
//             <th className="titles" scope="col">TenDD</th>
//             <th className="titles" scope="col">TenTinhThanh</th>
//             <th className="titles" scope="col">DonGia</th>
//             {/* <th scope="col">Edit</th>
//             <th scope="col">Delete</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {packages &&
//             packages.map((packages) => {
//               return (
//                 <tr key={packages.id} >
//                   <td className="pg">{packages.tendd}</td>
//                   <td className="pg">{packages.tentinhthanh}</td>
//                   <td className="pg">{packages.dongia}</td>
//                   <td className="sub">
//                     <button
//                       onClick={(e) => handleUpdate(e, packages.id)}
//                       className="btn"
//                     >
//                       Update
//                     </button>
//                   </td>
//                   <td className="sub">
//                     <button
//                       onClick={(e) => handleDelete(e, packages.id)}
//                       className="btn"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default PackageList