// import React, {useState, useContext, useEffect} from 'react'
// import { useParams, useNavigate } from 'react-router-dom';
// import backendUrl from '../../../../apis/backend-url';
// import { PackagesContext } from '../../../../context/PackagesContext'
// import '../ADMIN_ONLY/AdminUpdatePage/adminupdatepage.css'

// const UpdatePackage = (props) => {
//     const {id} = useParams();
//   let navigate = useNavigate();
//   const { packages } = useContext(PackagesContext);
//   const [tendd, setTenDD] = useState("");
//   const [tentinhthanh, setTenTinhThanh] = useState("");
//   const [DonGia, setDonGia] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await backendUrl.get(`/${id}`);
//       console.log(response.data.data);
//       setTenDD(response.data.data.packages.tendd);
//       setTenTinhThanh(response.data.data.packages.tentinhthanh);
//       setDonGia(response.data.data.packages.dongia);
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedPackage = await backendUrl.put(`/${id}`, {
//       tendd,
//       tentinhthanh,
//       dongia: DonGia,
//     });
//     navigate("/admin");
//   };

//   return (
//     <div>
//       <form action="">
//         <div className="form-group">
//           <label htmlFor="tendd">TenDD</label>
//           <input
//             value={tendd}
//             onChange={(e) => setTenDD(e.target.value)}
//             id="tendd"
//             className="form-control"
//             type="text"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="tentinhthanh">TenTinhThanh</label>
//           <input
//             value={tentinhthanh}
//             onChange={(e) => setTenTinhThanh(e.target.value)}
//             id="tentinhthanh"
//             className="form-control"
//             type="text"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="dongia">Don Gia</label>
//           <input
//             value={DonGia}
//             onChange={(e) => setDonGia(e.target.value)}
//             id="dongia"
//             className="form-control"
//             type="text"
//           />
//         </div>
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="btn btnprimary"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdatePackage;