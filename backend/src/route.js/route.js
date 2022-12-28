const express = require('express');
const router = express.Router();

const {getData,deleteData,getAllUserData}=require('../controller/fetchdata')

router.get("/getdata",getData)
router.delete("/deletedata",deleteData)
router.get("/getAllUserDetails",getAllUserData)
module.exports = router