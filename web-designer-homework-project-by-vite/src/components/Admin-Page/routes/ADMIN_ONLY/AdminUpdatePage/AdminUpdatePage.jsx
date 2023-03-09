import React from "react";
import UpdateUser from '../../UsersInfo/UpdateUser'
import './adminupdatepage.css'

const AdminUpdatePage = () => {
  return (
    <div className="admin-contain">
      <h1 className="text-center">Update Users</h1>
      <UpdateUser />
    </div>
  );
};

export default AdminUpdatePage;