import React from "react";
import UpdateUser from '../../UsersInfo/UpdateUser'
import './adminupdatepage.css'

const AdminUpdatePage = () => {
  return (
    <>
    <AdminNavBar />
    <section>
    <div className="admin-container">
      <h1 className="text-center">Update Users</h1>
      <UpdateUser />
    </div>
    </section>
    <AdminFooter />
    </>
  );
};

export default AdminUpdatePage;