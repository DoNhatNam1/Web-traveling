// import React,{useState, useContext} from 'react'
// import backendUrl from '../../../../apis/backend-url'
// import { PackagesContext } from '../../../../context/PackagesContext';
// import '../ADMIN_ONLY/AdminPage/adminPage.css'

// const AddPackage = () => {
//     const { addPackages } = useContext(PackagesContext);
//   const [tendd, setTenDD] = useState("");
//   const [tentinhthanh, setTenTinhThanh] = useState("");
//   const [Dongia, setDonGia] = useState("");

// const handleSubmit = async () => {
//     // e.preventDefault();
//     try {
//       const response = await backendUrl.post("/", {
//         tendd,
//         tentinhthanh,
//         dongia: Dongia
//       });
//       console.log(response.data.data);
//       addPackages(response.data.data.packages);
//     } catch (err) {
//       console.log(err);
//     }
// };
//   return (
//     <div className="mb-4">
//       <form action="">
//         <div className="formrow">
//           <div className="col">
//             <input
//               value={tendd}
//               onChange={(e) => setTenDD(e.target.value)}
//               type="text"
//               className="formcontrol"
//               placeholder="Ten_DD...."
//             />
//           </div>
//           <div className="col">
//             <input
//               value={tentinhthanh}
//               onChange={(e) => setTenTinhThanh(e.target.value)}
//               className="formcontrol"
//               type="text"
//               placeholder="Ten_Tinh_Thanh...."
//             />
//           </div>
//           <div className="col">
//             <input
//               value={Dongia}
//               onChange={(e) => setDonGia(e.target.value)}
//               className="formcontrol"
//               type="text"
//               placeholder="Don_Gia...."
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="btn btnprimary"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
  


// export default AddPackage