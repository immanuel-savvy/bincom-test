import { connection, db_conn } from "./db";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/Assets"));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));

app.get("/", (req, res) => res.send("<div><h1>Hi, Bincom.</h1></div>"));

app.listen(1198, async () => {
  await db_conn();

  console.log("Bincom Backend started on :1198");
});
