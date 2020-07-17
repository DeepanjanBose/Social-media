const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./model/mongodb");

require("./model/user");
require("./model/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

const PORT = process.env.PORT || 5000 ;

if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
