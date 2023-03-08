require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
//Middlewares

app.use(cors());
app.use(express.json());

// Routes

// Get All tkhach for all users
app.get("/admin/info", async (req, res) => {
  try {
    const khachs = await db.query("select * from tkhach");
    // console.log(khachs);

    const dangkys = await db.query("select * from tdangky");
    // console.log(dangkys);


    res.status(200).json({
      status: "success",
      results_for_khach: khachs.rows.length,
      results_for_dang_ky: dangkys.rows.length,
      data: {
        khachs: khachs.rows,
        dangkys: dangkys.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// Get a tkhach and for each have a tdangky
app.get("/admin/info/:makhach", async (req, res) => {
  
  try {
    const khach = await db.query("select DISTINCT * from tkhach where makhach = $1", 
    [req.params.makhach]
    );
    console.log(khach);

    const dangky = await db.query("SELECT tdk.machuyen, TO_CHAR(ngaydky, 'dd/Mon/yyyy'), tdk.stdtra FROM tdangky tdk INNER JOIN tkhach tk ON tdk.makhach = tk.makhach WHERE tk.makhach = $1", 
    [req.params.makhach]
    );
    console.log(dangky);
    res.status(200).json({
      status: "success",
      data: {
        khachs: khach.rows[0],
        dangkys: dangky.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});



// Create a user in admin page

app.post("/admin/info", async (req, res) => {
  console.log(req.body);

  try {
    const khach = await db.query(
      "WITH khach_key AS (INSERT INTO tkhach (tenkhach, dienthoai, diachi) VALUES ($1, $2, $3) RETURNING makhach) INSERT INTO tdangky (machuyen, makhach, ngaydky, stdtra) VALUES ((SELECT machuyen FROM tchuyendulich),(SELECT makhach FROM khach_key), $4, $5)",
      [req.body.tenkhach, req.body.dienthoai, req.body.diachi, req.body.ngaydky, req.body.stdtra]
    );
    console.log(khach);
    res.status(201).json({
      status: "success",
      data: {
        khachs: khach.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a User Form in client

app.post("/bookform", async (req, res) => {
  console.log(req.body);

  try {
    const khach = await db.query(
      "WITH khach_key AS (INSERT INTO tkhach (tenkhach, dienthoai, diachi) VALUES ($1, $2, $3) RETURNING makhach) INSERT INTO tdangky (machuyen, makhach, ngaydky, stdtra) VALUES ((SELECT machuyen FROM tchuyendulich),(SELECT makhach FROM khach_key), $4, $5)",
      [req.body.tenkhach, req.body.dienthoai, req.body.diachi, req.body.ngaydky, req.body.stdtra]
    );
    console.log(khach);
    res.status(201).json({
      status: "success",
      data: {
        khachs: khach.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update user

app.put("/admin/info/:makhach", async (req, res) => {
  try {
    const khach = await db.query(
      "UPDATE tkhach SET tenkhach = $1, dienthoai = $2, diachi = $3 where makhach = $4 returning *",
      [req.body.tenkhach, req.body.dienthoai, req.body.diachi, req.params.makhach]
    );

    const dangky = await db.query(
      "UPDATE tdangky SET machuyen = $1, ngaydky = $2, stdtra = $3 where makhach = $4 returning *",
      [req.body.machuyen, req.body.ngaydky, req.body.stdtra, req.params.makhach]
    );
    
    res.status(200).json({
      status: "success",
      data: {
        khachs: khach.rows[0],
        dangkys: dangky.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});


// Delete user

app.delete("/admin/info/:makhach", async (req, res) => {
  try {
    const results = db.query("DELETE FROM tkhach, tdangky where makhach = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});