import React from "react";
import UpdateUser from '../../UsersInfo/UpdateUser'
import AdminNavBar from "../../Admin-NavBar/Admin-NavBar";
import AdminFooter from "../../Admin-Footer/Admin-Footer";
import './adminupdatepage.css'

const AdminUpdatePageUser = () => {
  return (
    <>
    <AdminNavBar />
      <h1 className="text-center">Update Users</h1>
      <UpdateUser />
    <AdminFooter />
    </>
  );
};

export default AdminUpdatePageUser;