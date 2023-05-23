const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const dotenv = require("dotenv");

const userRouter = require("./server/routes/userRoute");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Parsing middleware
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Static files
app.use(express.static("public"));

//Template Engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//Connect to DB
pool.getConnection((err, connection) => {
  if (err) throw err; // not connected
  console.log(`Connected as ID ${connection.threadId}`);
});

//Mounting routes
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
