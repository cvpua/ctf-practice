const express = require('express');
const router = express.Router();
const pwd = "4132";


router.get('/pldtwifi',(req,res) =>{
    
    res.render('./wifi/login',{layout:'index',title : 'Login'});
    
});

router.post('/pldtwifi',(req,res) => {
    
    if(req.body.username === "admin" && req.body.password.toString() === pwd){
        // res.render('./wifi/router',{layout:'index',title: 'Success'});
        res.json({flag:"flag{brut3_f0rc3_is_h3ad4ch3}"});
    }else{
        res.json({msg : "Invalid password"})
        // res.render('./wifi/invalid',{layout:'index',title:'Invalid'});
    }
})




module.exports = router;