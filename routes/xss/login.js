const express = require('express');
const router = express.Router();
const tools = require('../../Tools');


router.get('/hardware-store',(req,res) =>{
    
    res.render('./hardware/login',{layout:'index',title : 'Login'});
    
});

router.post('/hardware-store/dashboard',(req,res) => {
    if(req.body.username === "user" && req.body.password == "user"){
        res.render('./hardware/dashboard',{layout:'index', title: 'Dashboard' ,tools});
    }else{
        res.render('./hardware/invalid',{layout:'index'});
    }
})




module.exports = router;