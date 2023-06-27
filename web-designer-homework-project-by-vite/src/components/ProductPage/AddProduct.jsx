import React, { useState, useContext } from "react";
import { storage } from "../../FirebaseDatabase/firebase"; 
import backendPackagesUrl from '../../apis/package-most-famous-url'
import { Context } from '../../context/Context';
import {
    ref,
    uploadBytes,
    getDownloadURL,

  } from "firebase/storage";
  import { v4 } from "uuid";

const AddProduct = () => {
  const { addPackages } = useContext( Context );
    const [destination, setDestination] = useState("");
      const [departure, setDeparture] = useState("");
      const [tenDD, setTenDD] = useState("");
      const [date, setDate] = useState("");
      const [note, setNote] = useState("");
      const [DonGia, setDonGia] = useState("");
      const [image, setImage] = useState(null);
      const [imageUrl, setImageUrl] = useState(""); 
    
      const handleImageUpload = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
      }; 
    
      const handleAddData = async (e) => {
      e.preventDefault();
      if (destination === "" || departure === "" || date === "" || note === "" || image == null) return;
    
      const storageRef = ref(storage, `images/${image.name + v4()}`);
      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
    
          backendPackagesUrl.post("/", {
            DiemKhoiHanh: destination,
            DiemDen: departure,
            GhiChu: note,
            tenDD: tenDD,
            NgayKhoiHanh: date,
            DonGia: DonGia,
            imgSrc: url
          }).then((response) => {
            console.log(response.data.datapackage);
            addPackages(response.data.datapackage.package);
          }).catch((err) => {
            console.log(err);
          });
        }); 
      });
    };  

  return (
  <section className="AddPackages-main">
    <div className="main-content">
    <form onSubmit={handleAddData}>
      <label>
       Điểm khởi hành:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
<br/>
      <label>
        Điểm đến:
        <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
      </label>
<br/>
      <label>
        Ghi chú:
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
<br/>
      <label>
        Tên địa điểm:
        <input type="text" value={tenDD} onChange={(e) => setTenDD(e.target.value)} />
      </label>
<br/> 
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
        <br/>
      <label>
        Đơn giá:
        <input type="number" value={DonGia} onChange={(e) => setDonGia(e.target.value)} />
      </label>
<br/>
      <label>
        Image:
        <input type="file" onChange={handleImageUpload} />
      </label>
<br/>
      <button type="submit">Add Data</button>
    </form>
</div>
</section>
  );
}

export default AddProduct