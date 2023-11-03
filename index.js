
const express =require("express")
const socket =require("socket.io")
const app = express()
const port =5000

app.get("/",(req,res)=>{
    res.send("Welcome")
})

const server = app.listen(port,()=>{
    console.log(`server is live at port no. ${port}`);
})

const io =socket(server,{
    cors:{
        origin:"*",
    }
})

io.on('connection', (socket) => {
    console.log(socket.id);
  
    socket.on('message', (message) => {
        console.log(message)
      io.emit('message', message);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

