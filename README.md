Employee Management System
==========================

 Project Overview
-----------------

The **Employee Management System** is a web application built using **Node.js, Express, and MySQL** that allows users to manage employees, submit leave requests, and update leave statuses.

 Tech Stack
-----------

*   **Backend:** Node.js, Express.js
    
*   **Database:** MySQL
    
*   **ORM/Query Builder:** MySQL2
    
*   **Environment Variables:** dotenv
    

 Features
---------

*   Add, update, and delete employees
    
*   Submit leave requests
    
*   Fetch all leave requests
    
*   Approve or reject leave requests
    
*   Fetch leave requests for specific employees
    

 Installation & Setup
---------------------

###  Clone the repository

    git clone https://github.com/yourusername/Employee_Management_System.git
    cd Employee_Management_System

###  Install dependencies

    npm install

###  Configure Environment Variables

Create a `.env` file and add the following:

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=employee_management
    PORT=5000

###  Run the MySQL Server

Ensure your MySQL database is running and create the necessary tables.

### Start the Server

    npm start

OR (if using nodemon for auto-restart on changes)

    npm run dev

###  API Endpoints

Method

Endpoint

Description

POST

`/leave/`

Submit a leave request

GET

`/leave/`

Get all leave requests

GET

`/leave/employee/:employee_id`

Get leave requests for a specific employee

PUT

`/leave/:id`

Update leave status

###  How to Run the Project

1.  Start the MySQL server and ensure the database is created.
    
2.  Navigate to the project directory and install dependencies: `npm install`
    
3.  Set up the `.env` file with your database credentials.
    
4.  Run the server using `npm start` or `npm run dev`.
    
5.  Use **Postman** or **cURL** to test the API endpoints.
    

  

---
