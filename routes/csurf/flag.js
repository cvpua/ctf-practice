const express = require('express');
const router = express.Router();
const flags = require('../../Flags');

const csrf = require('csurf');

const csrfProtection = csrf();

router.use(csrfProtection);

router.get('/',(req,res) => {
   
    res.render('main',{layout: 'index',csrfToken : req.csrfToken()});
});



router.post('/tictactoe',(req,res) =>{

    const result = req.body.result;
    if(result == "win" ){
        res.status(200).json({msg: "Thank you for playing", tictac:flags.tictactoe});
    }
    else if(result == "draw"){
        res.status(200).json({msg: "Draw", tictac:"Try again"});
    }
    else{
        res.status(200).json({msg: "Better luck next time!", tictac:"Try again"})
    }
});


router.get('/tictactoe',(req,res) => {
    res.render('./tictactoe/gameboard',{layout:'index',title:'Tic Tac Toe',csrfToken : req.csrfToken()});
})

router.get('/tictactoe/secretPath',(req,res) => {
    res.render('./tictactoe/secretPath',{layout: 'index',title :'Secret Path'});
})

module.exports = router;