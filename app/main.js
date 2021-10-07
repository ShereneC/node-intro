import express from "express";
import bp from "body-parser";

let server = express();
let port = 3000;

let cats = [{ name: "wiskers" }, { name: "Scruffy" }]

// this registers the middleware that turns data into javascript objects (json)
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
  if (!req.body.name) {
    return next("No Name Provided")
    // the above sends an err with it so that it will then hit the default error handler because it will have 4 paramaters
  }
  cats.push(req.body)
  res.send(cats)
})
//NOTE: Default Error Handler
server.use((err, req, res, next) => {
  console.log(err)
  res.status(400).send(err)
})
server.use((req, res, next) => {
  res.status(404).send("Route not Found")
})

server.listen(port, () => {
  console.log("server is running on port:", port);
});