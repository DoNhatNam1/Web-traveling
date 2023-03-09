import React from 'react'
import ClientPage from './components/Client-page'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectAdminLogin from './components/Admin-Page/ProtectAdminLogin';
import { UsersContextProvider } from './context/UsersContext';
import AdminPage from './components/Admin-Page/routes/ADMIN_ONLY/AdminPage/AdminPage';
import AdminUpdatePage from './components/Admin-Page/routes/ADMIN_ONLY/AdminUpdatePage/AdminUpdatePage';
import FormPage from './components/FormPage/FormPage';

const App = () => {
 
  return (
    <UsersContextProvider>
 <>
  <Router>
    <Routes>
      <Route exact path="/" element={<ClientPage />} />
      <Route path="/admin/info" element={<AdminPage />} />
      <Route path="/admin/info/:id/update" element={< AdminUpdatePage />} />
      {/* <Route path="/admin/:id" element={< AdminPackageDetailPage />} /> */}
      <Route path="/bookform" element={<FormPage />} />

    </Routes>
  </Router>
  </>
    </UsersContextProvider>
 
  )
}

export default App
