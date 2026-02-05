// controllers/index.js
export function getData(req, res) {
  res.json({ message: "Hello from the controller!" });
}

const express = require(‘express’);
const mongoose = require(‘mongoose’);
const app = express();
const PORT = 4000;
app.listen(PORT,()=>{
 console.log(`Server Running on port ${PORT}`);
});

const app = express();
mongoose.connect(`mongodb+srv://sin12014:MangoMongoDB123@cluster0.0oo8r1p.mongodb.net/?appName=Cluster0`,(err)=>{
if(err) throw err;
console.log(“DB Connected Successfully”);
});

