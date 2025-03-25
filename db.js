import mysql from "mysql2";
import  dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Danial*21189#",
    database: "employee_management"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

export default db;
