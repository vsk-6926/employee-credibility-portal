const express = require('express');
const router = express.Router();

const createEmployee = require('../controller/EmployeeController/ERegisterController');
const updateInfo = require('../controller/EmployeeController/EUpdateInfo');

router.post('/register', createEmployee);
router.post('/update', updateInfo);

module.exports = router;
