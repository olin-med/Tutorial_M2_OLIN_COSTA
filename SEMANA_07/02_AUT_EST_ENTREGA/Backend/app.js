const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curr.db";
const db = new sqlite3.Database(DBPATH);
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/proficiencias", (req, res) => {
  const db = new sqlite3.Database(DBPATH, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  });
  db.all("SELECT * FROM proficiencias", [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows);
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Closed the database connection.");
  });
});

app.get("/experiencias", (req, res) => {
  const db = new sqlite3.Database(DBPATH, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  });
  db.all("SELECT * FROM experiencias", [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows);
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Closed the database connection.");
  });
});

app.get("/formacao", (req, res) => {
  const db = new sqlite3.Database(DBPATH, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  });
  db.all("SELECT * FROM formacao", [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    res.json(rows);
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Closed the database connection.");
  });
});

