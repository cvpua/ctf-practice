const express = require('express');
const router = express.Router();
const pwd = 23451


router.get('/pldtwifi',(req,res) =>{
    
    res.render('./wifi/login',{layout:'index',title : 'Login'});
    
});

router.post('/pldtwifi',(req,res) => {
    if(req.body.username === "user" && req.body.password == pwd){
        res.json({flag:"flag{brut3_f0rc3_is_h3ad4ch3"})
    }else{
        res.json({msg: "Wrong password"});
    }
})




module.exports = router;