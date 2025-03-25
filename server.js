import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import leaveRoutes from "./Employee_router.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Use the leave management routes
app.use("/leave", leaveRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
