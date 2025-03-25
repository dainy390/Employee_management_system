import express from "express";
const router = express.Router(); 
import leaveController from "./controller.js";

//routes using controller methods
router.post("/", leaveController.submitLeaveRequest);
router.get("/", leaveController.getAllLeaveRequests);
router.put("/:id", leaveController.updateLeaveStatus);
router.get("/employee/:employee_id", leaveController.getEmployeeLeaveRequests);

export default router;
