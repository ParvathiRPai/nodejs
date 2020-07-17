const express=require('express');
const rootDir=require('../util/path');
const adminData=require('./admin');
const router=express.Router();
const path=require('path');
router.get('/',(req, res, next)=>{
    const products=adminData.products;
    res.render('shop', {prods:products, docTitle:'Shop'});
    
    
});

module.exports=router;