import React from 'react'
import ClientPage from './components/Client-page'
import { storage } from "./FirebaseDatabase/firebase";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import UserDashboard from './components/UserDashboard/UserMainDashboard/UserDashboard';
import ProfileContainer from './components/UserDashboard/UserDashboardProfile/ProfileContain/ProfileContainer';
import ProfileContainer2 from './components/UserDashboard/UserDashboardProfile/ProfileContainer2/ProfileContainer2';
import ProfileEditMain from './components/UserDashboard/UserDashboardProfile/ProfileEditMain/ProfileEditMain';
import UserChangePasswordContainer from './components/UserDashboard/UserDashboardChangePassword/UserChangePasswordContainer/UserChangePasswordContainer'

const App = () => {
  const hours = 4; 
  const now = new Date().getTime();
  const setupTime = localStorage.getItem('setupTime');
  if (setupTime === null) {
        localStorage.setItem('setupTime', now)
    } else {
          if(now-setupTime > hours*60*60*1000) {
                localStorage.clear()
                localStorage.setItem('setupTime', now);
              }
            };
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
      <Route path="/bookform/user" element={<FormPage />} />
      <Route path="/Blogs" element={<BlogsListView />} />
      <Route path="/news" element={<NewsListView />} />
      <Route path="/Blogs/:id" element={<DetailBlogView />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="//userdashboard/maindashboard/:id" element={<UserDashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/AddProduct" element={<ProductPage />} />
      <Route path="/userdashboard/profile/:id/info" element={<ProfileContainer />} />
      <Route path="/userdashboard/changepassword/:id" element={<UserChangePasswordContainer/>} />
      <Route path="/userdashboard/profile/:id/ranking" element={<ProfileContainer2 />} />
      <Route path="/userdashboard/profile/:id/edit" element={<ProfileEditMain />} />
    </Routes>
  </Router>
  </>
    </ContextProvider>
 
  )
}

export default App
