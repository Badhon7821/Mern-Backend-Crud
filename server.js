
const express = require('express');
const app = express();
const routes = require('./Route/crudRoute.js')
const mongoose = require('mongoose');

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})



app.use('/api',routes)
app.listen(5000,()=>{
    console.log('My server is running');
})