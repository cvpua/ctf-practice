const express = require('express');
const handlebars = require('express-handlebars');


const app = express();
const xss = require('./routes/xss/login');

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


app.use('/',xss);
app.use('/public', express.static('public'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));