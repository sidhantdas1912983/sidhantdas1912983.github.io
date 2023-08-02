const express  = require('express');
//const mongoose = require('mongoose');
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://netninja:Hakunamatatta@cluster0/?retryWrites=true&w=majority'
//mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true });
app.listen(3000);
let path = './';
app.set('view engine' , 'ejs');
app.use(express.static('./'));
app.get('/',(req,res)=>{
    res.render('index');
});
