const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//View Users
exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId}`);

    //Use the connection
    connection.query(
      "SELECT * FROM user WHERE status = 'active'",
      (err, rows) => {
        //When the connection is done, release it
        connection.release();

        if (!err) {
          res.render("index", { rows });
        } else {
          console.log(err);
        }

        console.log(`The data from user table:`, rows);
      }
    );
  });
};
