import React,{useState, useContext} from 'react'
import backendUrl from '../../../../apis/backend-url'
import { UsersContext } from '../../../../context/UsersContext';
import '../../routes/ADMIN_ONLY/AdminPage/adminPage.css'

const AddUser = () => {
    const { addUsers } = useContext( UsersContext );
  const [tenkhach, setTenKhach] = useState("");
  const [dienthoai, setDienThoai] = useState();
  const [diachi, setDiaChi] = useState("");
  const [machuyen, setMaChuyen] = useState("");
  const [ngaydky, setNgaydky] = useState("");
  const [stdtra, setStdtra] = useState("");

const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await backendUrl.post("/", {
        tenkhach,
        dienthoai,
        diachi,
        machuyen,
        ngaydky,
        stdtra
      });
      console.log(response.data.data);
      addUsers(response.data.data.khachs);
    } catch (err) {
      console.log(err);
    }
};
  return (
    <div className="mb-4">
      <form action="">
        <div className="formrow">
          <div className="col">
            <input
              value={tenkhach}
              onChange={(e) => setTenKhach(e.target.value)}
              type="text"
              className="formcontrol"
              placeholder="Ten Khach...."
            />
          </div>
          <div className="col">
            <input
              value={dienthoai}
              onChange={(e) => setDienThoai(e.target.value)}
              className="formcontrol"
              type="text"
              placeholder="Dien Thoai...."
            />
          </div>
          <div className="col">
            <input
              value={diachi}
              onChange={(e) => setDiaChi(e.target.value)}
              className="formcontrol"
              type="text"
              placeholder="Dia Chi...."
            />
          </div>
          <div className="col">
            <input
              value={machuyen}
              onChange={(e) => setMaChuyen(e.target.value)}
              className="formcontrol"
              type="text"
              placeholder="Ma Chuyen...."
            />
          </div>
          <div className="col">
            <input
              value={ngaydky}
              onChange={(e) => setNgaydky(e.target.value)}
              className="formcontrol"
              type="text"
              placeholder="Ngay Dang Ky...."
            />
          </div>
          <div className="col">
            <input
              value={stdtra}
              onChange={(e) => setStdtra(e.target.value)}
              className="formcontrol"
              type="text"
              placeholder="So Tien Da Tra...."
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btnprimary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
  


export default AddUser