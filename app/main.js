import express from "express";
import bp from "body-parser";

let server = express();
let port = 3000;

let cats = [{ name: "wiskers" }, { name: "Scruffy" }]

server.use(bp.json());

//this was in step 7 text, but not in the video
//server.use(express.static(__dirname + '/public'));
//this tells express that the front end of our website is in the folder 'public'

server.get('/', (req, res, next) => {
  res.send("Hello world")
})
server.get('/cats', (req, res, next) => {
  res.send(cats)
})
server.post('/cats', (req, res, next) => {
  req.body
  cats.push(req.body)
  res.send(cats)
})

server.listen(port, () => {
  console.log("server is running on port:", port);
});