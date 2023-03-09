import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import backendUrl from '../../../../apis/backend-url.jsx';
import '../ADMIN_ONLY/AdminUpdatePage/adminupdatepage.css'

const UpdateUser = (props) => {
    const { id } = useParams();
  let navigate = useNavigate();
  const [tenkhach, setTenKhach] = useState("");
  const [dienthoai, setDienThoai] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [machuyen, setMaChuyen] = useState("");
  const [ngaydky, setNgayDKy] = useState("");
  const [stdtra, setStdtra] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await backendUrl.get(`/${id}`);
      console.log(response.data.data);
      setTenKhach(response.data.data.khachs.tenkhach);
      setDienThoai(response.data.data.khachs.dienthoai);
      setDiaChi(response.data.data.khachs.diachi);
      setMaChuyen(response.data.data.khachs.machuyen);
      setNgayDKy(response.data.data.khachs.ngaydky);
      setStdtra(response.data.data.khachs.stdtra);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = await backendUrl.put(`/${id}`, {
      tenkhach,
      dienthoai,
      diachi,
      machuyen,
      ngaydky,
      stdtra
    });
    navigate("/admin/info");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="tenkhach">Ten Khach</label>
          <input
            value={tenkhach}
            onChange={(e) => setTenKhach(e.target.value)}
            id="tenkhach"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dienthoai">Dien Thoai</label>
          <input
            value={dienthoai}
            onChange={(e) => setDienThoai(e.target.value)}
            id="dienthoai"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="diachi">Dia Chi</label>
          <input
            value={diachi}
            onChange={(e) => setDiaChi(e.target.value)}
            id="diachi"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="machuyen">Ma Chuyen</label>
          <input
            value={machuyen}
            onChange={(e) => setMaChuyen(e.target.value)}
            id="machuyen"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ngaydky">Ngay Dang Ky</label>
          <input
            value={ngaydky}
            onChange={(e) => setNgayDKy(e.target.value)}
            id="ngaydky"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stdtra">So Tien Da Tra</label>
          <input
            value={stdtra}
            onChange={(e) => setStdtra(e.target.value)}
            id="stdtra"
            className="form-control"
            type="text"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btnprimary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;