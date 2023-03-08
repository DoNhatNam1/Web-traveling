import React from 'react'
import ClientPage from './components/Client-page'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectAdminLogin from './components/Admin-Page/ProtectAdminLogin';
import { PackagesContextProvider } from './context/PackagesContext';
import AdminPage from './components/Admin-Page/routes/ADMIN_ONLY/AdminPage/AdminPage';
import AdminUpdatePage from './components/Admin-Page/routes/ADMIN_ONLY/AdminUpdatePage/AdminUpdatePage';
import FormPage from './components/FormPage/FormPage';

const App = () => {
 
  return (
    <PackagesContextProvider>
 <>
  <Router>
    <Routes>
      <Route exact path="/" element={<ClientPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/:id/update" element={< AdminUpdatePage />} />
      {/* <Route path="/admin/:id" element={< AdminPackageDetailPage />} /> */}
      <Route path="/bookform" element={<FormPage />} />

    </Routes>
  </Router>
  </>
    </PackagesContextProvider>
 
  )
}

export default App
