'use strict';

require('dotenv').config();

const express = require('express');

const superagent = require('superagent');

const server = express();

server.set('view engine','ejs');
 

const PORT = process.env.PORT;

server.use(express.static('./public'));
// server.use(express.static('./views'));


server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/hello',(req,res) =>{
    res.render('pages/index');
});

server.listen(PORT, () =>{
    console.log(`listening onPORT ${PORT}`);
})