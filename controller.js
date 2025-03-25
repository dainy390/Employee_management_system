import db from "./db.js";

// Submit a leave request
export const submitLeaveRequest = (req, res) => {
    const { employee_id, start_date, end_date, reason } = req.body;
    
    if (!employee_id || !start_date || !end_date || !reason) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = "INSERT INTO LeaveRequests (employee_id, start_date, end_date, reason) VALUES (?, ?, ?, ?)";
    
    db.query(query, [employee_id, start_date, end_date, reason], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Leave request submitted", leaveId: result.insertId });
    });
};

// Fetch all leave requests
export const getAllLeaveRequests = (req, res) => {
    db.query("SELECT * FROM LeaveRequests", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Approve and Reject a leave request
export const updateLeaveStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    db.query("UPDATE LeaveRequests SET status = ? WHERE id = ?", [status, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Leave request updated" });
    });
};

// Fetch leave requests of a specific employee
export const getEmployeeLeaveRequests = (req, res) => {
    const { employee_id } = req.params;

    db.query("SELECT * FROM LeaveRequests WHERE employee_id = ?", [employee_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// export the leaveController
const leaveController = {
    submitLeaveRequest,
    getAllLeaveRequests,
    updateLeaveStatus,
    getEmployeeLeaveRequests,
};

export default leaveController;
