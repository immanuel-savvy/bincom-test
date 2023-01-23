import { createConnection, createPool } from "mysql2/promise";

let connection;

const db_conn = async () => {
  connection = await createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bincom",
  });

  // let [rows] = await connection.execute("select * from party");
  // console.log(rows);
};

// db_conn.connect((err) => {
//   if (err) {
//     return console.error("MySql: Database Connection failed");
//   }

//   console.log(`Mysql: Database connection successful`);
// });

export { db_conn, connection };
