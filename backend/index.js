const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require("./db");
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api', require("./routes/CreateUser"));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 