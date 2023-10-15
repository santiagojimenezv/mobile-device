const express = require('express')
const router = express.Router()
const addressController = require('../controllers/address')

http://localhost:3000/api/v1/departments
router.get("/departments", addressController.queryDepartments);


module.exports = router;