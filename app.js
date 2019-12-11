const express = require('express')
var app= express()
var server= require('http').createServer(app)
var io = require('socket.io')(server)

app.use('/public',express.static('public'))
app.set('views','./views');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
 
    res.render('index')
})

io.sockets.on('connection',function(socket){
    socket.emit('message','vous etes bien connecte')
    socket.on('appel',val=>{
        socket.emit('recu','vous avez lancez un appel')
        socket.emit('error','erreur')
    })
    
})

server.listen(8080,()=>{
    console.log('server start on port 8080');
})


