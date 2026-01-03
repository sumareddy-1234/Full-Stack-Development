const express=require('express')
const FirstController=require('../controllers/FirstController')
const route=express.Router();
route.get("/get-data",FirstController.TestingAPI)
module.exports=route;