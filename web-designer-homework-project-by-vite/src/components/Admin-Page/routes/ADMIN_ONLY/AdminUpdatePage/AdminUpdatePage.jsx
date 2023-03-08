import React from "react";
import UpdatePackage from '../../PackagesInfo/UpdatePackage'
import './adminupdatepage.css'

const AdminUpdatePage = () => {
  return (
    <div className="admin-contain">
      <h1 className="text-center">Update Package</h1>
      <UpdatePackage />
    </div>
  );
};

export default AdminUpdatePage;