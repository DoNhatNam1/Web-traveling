require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Packages
app.get("/api/v1/admin", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const packageData = await db.query("select * from test");

    res.status(200).json({
      status: "success",
      results: packageData.rows.length,
      data: {
        packages: packageData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a Package
app.get("/api/v1/admin/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query('select * from test where id = $1', [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        packages: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a Package

app.post("/api/v1/admin", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      'INSERT INTO test (tendd, tentinhthanh, dongia) values ($1, $2, $3) returning *',
      [req.body.tendd, req.body.tentinhthanh, req.body.dongia]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        packages: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Restaurants

app.put("/api/v1/admin/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE test SET tendd = $1, tentinhthanh = $2, dongia = $3 where id = $4 returning *",
      [req.body.tendd, req.body.tentinhthanh, req.body.dongia, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        packages: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete Restaurant

app.delete("/api/v1/admin/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM test where id = $1", [
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