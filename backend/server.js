const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log("Mongo connection error", err))

console.log("MONGO_URI", process.env.MONGO_URI)

app.get("/", (req, res) => {
    res.json({message: "API is running"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});