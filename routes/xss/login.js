const express = require('express');
const router = express.Router();
const tools = require('../../Tools');
const note = 'Inventory can only be viewed by the manager';

router.get('/hardware-store',(req,res) =>{
    
    res.render('./hardware/login',{layout:'index',title : 'Login'});
    
});

router.post('/hardware-store/dashboard/whatIsThis',(req,res) => {
    const ua = req.headers['user-agent']
    const browser = ua.split('/')[0]
    
    if(JSON.stringify(browser) === JSON.stringify('curl') || JSON.stringify(browser) === JSON.stringify('PostmanRuntime')){
        res.json({error : "invalid request"})
    }else if(browser.length < 6){
        res.json({error: "invalid request"})
    }else{
        res.json({auth:'hardwar3manag3r'});
    } 
    
});

router.post('/hardware-store/dashboard',(req,res) => {
    if(req.body.username === "user" && req.body.password === "user"){
        const cookie = "customer1";
        res.cookie('auth',cookie,{
            maxAge: 1000 * 60 * 5,
            httpOnly : true,
        });
        res.render('./hardware/dashboard',{layout:'index', title: 'Dashboard',note});

    }else{
        res.render('./hardware/invalid',{layout:'index'});
    }
})

router.get('/hardware-store/dashboard',(req,res) => {
    const cookies = req.cookies['auth'];
    if (cookies){
        if( JSON.stringify(cookies) === JSON.stringify('hardwar3manag3r')){
            res.render('./hardware/dashboard',{layout:'index', title: 'Dashboard', tools});
        }else{
            res.render('./hardware/dashboard',{layout:'index', title: 'Dashboard', note});
        }
    }else{
        res.render('./hardware/login',{layout:'index',title : 'Login'});
    }
    
})





module.exports = router;