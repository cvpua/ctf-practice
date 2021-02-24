const express = require('express');
const router = express.Router();



router.get('/hardware-store',(req,res) =>{
    res.render('main',{layout:'index'});
});


router.post('/hardware-store',(req,res) => {
    if(req.body.username === "user" && req.body.password == "user"){
        res.render('./partials/test',{layout:'index'});
    }else{
        res.render('invalid',{layout:'index'});
    }
})




module.exports = router;