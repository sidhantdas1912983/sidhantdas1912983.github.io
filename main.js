const express  = require('express');
const app = express();
app.listen(3000);
let path = './';
app.set('view engine' , 'ejs');
app.use(express.static('./'));
app.get('/',(req,res)=>{
    res.render('index');
});
