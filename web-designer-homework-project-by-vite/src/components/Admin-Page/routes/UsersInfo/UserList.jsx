import React, { useEffect, useContext } from "react";
import { UsersContext } from '../../../../context/UsersContext'
import backendUrl from '../../../../apis/backend-url';
import { useNavigate } from "react-router-dom";
import '../ADMIN_ONLY/AdminPage/adminPage.css'

const UserList = (props) => {
    const { users, setUsers } = useContext( UsersContext );
    let navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await backendUrl.get("/");
          console.log(response.data.data);
          setUsers(response.data.data.khachs);
        } catch (err) {}
      };
  
      fetchData();
    }, []);

    const handleDelete = async (e, makhach) => {
        e.stopPropagation();
        try {
          const response = await backendUrl.delete(`/${makhach}`);
          setUsers(
            users.filter((users) => {
              return users.makhach !== makhach;
            })
          );
        } catch (err) {
          console.log(err);
        }
      };

      const handleUpdate = (e, makhach) => {
        e.stopPropagation();
        navigate(`/admin/info/${makhach}/update`);
      };
    
      // const handlePackageSelect = (id) => {
      //   navigate(`/admin/packages/${id}`);
      // };

  return (
    <div className="list-group">
      <table className="table-container">
        <thead>
          <tr className="bg-primary">
            <th className="titles" scope="col">Ten Khach</th>
            <th className="titles" scope="col">Dien Thoai</th>
            <th className="titles" scope="col">Dia Chi</th>
            <th className="titles" scope="col">Ngay Dang Ky</th>
            <th className="titles" scope="col">So Tien Da Tra</th>
            {/* <th scope="col">Edit</th>
            <th scope="col">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((users) => {
              return (
                <tr key={users.makhach} >
                  <td className="pg">{users.tenkhach}</td>
                  <td className="pg">{users.dienthoai}</td>
                  <td className="pg">{users.diachi}</td>
                  <td className="pg">{users.to_char}</td>
                  <td className="pg">{users.stdtra}</td>
                  <td className="sub">
                    <button
                      onClick={(e) => handleUpdate(e, users.makhach)}
                      className="btn"
                    >
                      Update
                    </button>
                  </td>
                  <td className="sub">
                    <button
                      onClick={(e) => handleDelete(e, users.makhach)}
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