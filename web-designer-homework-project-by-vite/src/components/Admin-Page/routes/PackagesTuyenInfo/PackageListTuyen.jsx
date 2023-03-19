import React, { useEffect, useContext } from "react";
import { UsersContext } from '../../../../context/UsersContext'
import backendUrl from '../../../../apis/backend-url';
import { useNavigate } from "react-router-dom";
import '../ADMIN_ONLY/AdminPageUser/adminPage.css'

const UserList = (props) => {
    const { users, setUsers } = useContext( UsersContext );
    let navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await backendUrl.get("/");
          console.log(response.data.data);
          setUsers(response.data.data.users);
        } catch (err) {}
      };
  
      fetchData();
    }, []);

    const handleDelete = async (e, MaKhach) => {
        e.stopPropagation();
        try {
          const response = await backendUrl.delete(`/${MaKhach}`);
          setUsers(
            users.filter((users) => {
              return users.MaKhach !== MaKhach;
            })
          );
        } catch (err) {
          console.log(err);
        }
      };

      const handleUpdate = (e, makhach) => {
        e.stopPropagation();
        navigate(`/admin/user/${makhach}/update`);
      };
    
      // const handlePackageSelect = (id) => {
      //   navigate(`/admin/packages/${id}`);
      // };

  return (
    <div className="list-group">
      <table className="table-container">
        <thead>
          <tr className="bg-primary">
            <th className="titles" scope="col">Ten Tuyen</th>
            <th className="titles" scope="col">So Ngay</th>
            <th className="titles" scope="col">Ghi Chu</th>
            {/* <th scope="col">Edit</th>
            <th scope="col">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((users) => {
              return (
                <tr key={users.MaKhach} >
                  <td className="pg">{users.TenKhach}</td>
                  <td className="pg">{users.DienThoai}</td>
                  <td className="pg">{users.DiaChi}</td>
                  <td className="sub">
                    <button
                      onClick={(e) => handleUpdate(e, users.MaKhach)}
                      className="btn"
                    >
                      Update
                    </button>
                  </td>
                  <td className="sub">
                    <button
                      onClick={(e) => handleDelete(e, users.MaKhach)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList