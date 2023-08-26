// IMPORT FILES AND MODULES
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const mongoose = require("mongoose");
const app = express();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

dotenv.config();
app.use(express.json());
app.use(cors()); // Add this line to enable CORS for all routes

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,  
  useUnifiedTopology: true,
}). then(console.log('Connected to Mongo'))
.catch((err) => console.log(err));
 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

