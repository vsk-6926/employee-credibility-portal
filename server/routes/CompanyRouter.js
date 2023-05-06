const express =  require('express');
const router = express.Router();

const Company = require('../models/Company');

const registerCompany = require('../controller/CompanyController/CRegisterController');
const updateCompanyInfo = require('../controller/CompanyController/CUpdateCompanyInfo');

router.post('/register', registerCompany);
router.post('/update', updateCompanyInfo);

module.exports = router;

