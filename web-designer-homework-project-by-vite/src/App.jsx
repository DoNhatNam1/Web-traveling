import React from 'react'
import ClientPage from './components/Client-page'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectAdminLogin from './components/Admin-Page/ProtectAdminLogin';
import { UsersContextProvider } from './context/UsersContext';
import AdminPageUser from './components/Admin-Page/routes/ADMIN_ONLY/AdminPageUser/AdminPageUser';
import AdminUpdatePageUser from './components/Admin-Page/routes/ADMIN_ONLY/AdminUpdatePageUser/AdminUpdatePageUser';
import AdminPagePackage from './components/Admin-Page/routes/ADMIN_ONLY/AdminPagePackage/AdminPagePackage';
import FormPage from './components/FormPage/FormPage';
import AddUser from './components/Admin-Page/routes/UsersInfo/AddUser';
import ADdPackageTuyen from './components/Admin-Page/routes/PackagesTuyenInfo/AddPackageTuyen';

const App = () => {
 
  return (
    <UsersContextProvider>
 <>
  <Router>
    <Routes>
      <Route exact path="/" element={<ClientPage />} />
      <Route path="/admin/user" element={<AdminPageUser />} />
      <Route path="/admin/PackageEdit" element={<AdminPagePackage />} />
      <Route path="/admin/user/add" element={<AddUser />} />
      <Route path="/admin/PackageEdit/add" element={<ADdPackageTuyen />} />
      <Route path="/admin/user/:id/update" element={< AdminUpdatePageUser />} />
      {/* <Route path="/admin/:id" element={< AdminPackageDetailPage />} /> */}
      <Route path="/bookform/user" element={<FormPage />} />

    </Routes>
  </Router>
  </>
    </UsersContextProvider>
 
  )
}

export default App
