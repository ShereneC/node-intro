import express from "express";

let server = express();
let port = 3000;

//this was in step 7, but not in the video
//server.use(express.static(__dirname + '/public'));
//this tells express that the front end of our website is in the folder 'public'

server.get('/', (req, res, next) => {
  res.send("Hello world")
});
server.get('/cats', (req, res, next) => {
  res.send("<h1>Hello Cats</h1>")
});

server.listen(port, () => {
  console.log("server is running on port:", port);
});