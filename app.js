const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const xss = require('./routes/xss/login');
const bruteforce = require('./routes/bruteforce/password');
const csurf = require('./routes/csurf/flag');
const homepage = require('./routes/homepage/home');

app.set('view engine', 'hbs');


app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    // defaultLayout : 'index',
    partialsDir: __dirname + '/views/partials/'
    }));



//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(session({secret :'mysupersecret',resave: false, saveUninitialized : false}))

app.use(cookieParser());
app.use('/',homepage);
app.use('/',xss);
app.use('/',bruteforce);
app.use('/',csurf);
app.use('/public', express.static('public'))


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));