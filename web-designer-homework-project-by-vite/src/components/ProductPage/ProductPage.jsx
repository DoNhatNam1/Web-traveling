import React, { useState } from "react";
import { storage, database } from "../../FirebaseDatabase/firebase"; 
import {
    ref as ref_storage,
    uploadBytes,
    getDownloadURL,

  } from "firebase/storage";
  import {
    ref as ref_database,
    set,
  } from "firebase/database";
  import { v4 } from "uuid";

const ProductPage = () => {
    const [destination, setDestination] = useState("");
      const [departure, setDeparture] = useState("");
      const [date, setDate] = useState("");
      const [image, setImage] = useState(null);
      const [imageUrl, setImageUrl] = useState(""); 
    
      const handleImageUpload = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
      }; 
    
      const handleAddData = async (e) => {
        e.preventDefault();
        const storageRef = ref_storage(storage, `images/${image.name + v4()}`);
        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
             const databaseRef = ref_database(database, `data/${Math.random().toString(36).substring(7)}`);
            const data =  { destination, departure, date, imageUrl: url };
            set(databaseRef, data).then(() => {
        setDestination("");
        setDeparture("");
        setDate("");
        setImage(null);
        // setImageUrl("");
            });
          });
            
        });
           
    // try {
    //     const response = await backendUrl.post("/", {
    //       TenKhach,
    //       DienThoai,
    //       DiaChi,
    //       MaChuyen,
    //       NgayDKy,
    //       STDTra
    //     });
    //     navigate("/admin/user");
    //     console.log(response.data.data);
    //     addUsers(response.data.data.user);
    //   } catch (err) {
    //     console.log(err);
    //   }
      };  

  return (
    <form onSubmit={handleAddData}>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <label>
        Departure:
        <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="file" onChange={handleImageUpload} />
      </label>
      <button type="submit">Add Data</button>
    </form>
  );
}

export default ProductPage