const express  = require('express');
const app = express();
app.listen(3000);
let path =  './views/' ;
app.set('view engine', 'ejs');
app.use(express.static('images'));
app.use(express.static('views'));
app.use(express.static('styles'));
app.get('/',(req,res)=>{
    res.render('index.html');
});
