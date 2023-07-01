import React from 'react'
import ClientPage from './components/Client-page'
import { storage } from "./FirebaseDatabase/firebase";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProtectAdminLogin from './components/Admin-Page/ProtectAdminLogin';
import { ContextProvider } from './context/Context';
import AdminPageUser from './components/Admin-Page/routes/ADMIN_ONLY/AdminPageUser/AdminPageUser';
import AdminUpdatePageUser from './components/Admin-Page/routes/ADMIN_ONLY/AdminUpdatePageUser/AdminUpdatePageUser';
import AdminPagePackage from './components/Admin-Page/routes/ADMIN_ONLY/AdminPagePackage/AdminPagePackage';
import FormPage from './components/FormPage/FormPage';
import AddUser from './components/Admin-Page/routes/UsersInfo/AddUser';
import AddPackageTuyen from './components/Admin-Page/routes/PackagesTuyenInfo/AddPackageTuyen';
import BlogsListView from './components/BlogsPage/BlogsListView/BlogsListView';
import DetailBlogView from './components/BlogsPage/BlogsDetailView/DetailBlogView';
import AboutPage from './components/AboutPage/AboutPage';
import NewsListView from './components/NewsPage/NewsListView/NewsListView';
import ProductPage from './components/ProductPage/ProductPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
 
  return (
    <ContextProvider>
 <>
  <Router>
    <Routes>
      <Route exact path="/" element={<ClientPage />} />
      <Route path="/admin/user" element={<AdminPageUser />} />
      <Route path="/admin/PackageEdit" element={<AdminPagePackage />} />
      <Route path="/admin/user/add" element={<AddUser />} />
      <Route path="/admin/PackageEdit/add" element={<AddPackageTuyen />} />
      <Route path="/admin/user/:id/update" element={< AdminUpdatePageUser />} />
      {/* <Route path="/admin/:id" element={< AdminPackageDetailPage />} /> */}
      <Route path="/bookform/user" element={<FormPage />} />
      <Route path="/Blogs" element={<BlogsListView />} />
      <Route path="/news" element={<NewsListView />} />
      <Route path="/Blogs/:id" element={<DetailBlogView />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/AddProduct" element={<ProductPage />} />

    </Routes>
  </Router>
  </>
    </ContextProvider>
 
  )
}

export default App
