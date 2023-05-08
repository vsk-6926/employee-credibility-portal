const express = require('express');
const router = express.Router();

const createEmployee = require('../controller/EmployeeController/ERegisterController');
const updateInfo = require('../controller/EmployeeController/EUpdateInfo');
const { getEmployeeDetails, getAllEmployees } = require('../controller/EmployeeController/EGetController');

router.post('/register', createEmployee);
router.post('/update', updateInfo);
router.post("/get",getEmployeeDetails);
router.get("/getall",getAllEmployees);

module.exports = router;
