const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv/config");
const api = process.env.API_URL;

// middleware - to handle the request and response
app.use(bodyParser.json());
app.use(cors());

// the morgan will display the log request it is also a middleware.
app.use(morgan("tiny"));

// api/v1
// creating the blog schema
const blogschema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  author: String,
});

const Blogs = mongoose.model("blogs", blogschema);

// the post request
app.post(`${api}/blogs`, (req, res) => {
  const Blog = new Blogs({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    author: req.body.author,
  });

  Blog.save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        success: false,
      });
      console.error(error);
    });
});

// the get request
app.get(`${api}/blogs`, async (req, res) => {
  const BlogsList = await Blogs.find();

  // to check if the list is empty
  if (!BlogsList) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
  res.send(BlogsList);
});

// writing the post request

// writing the get request

// connecting to the mongoDB database using mongoose
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((error) => {
    console.error(error);
  });

// the port the server is listening
app.listen(3000, () => {
  console.log(api);
  console.log("the server is running at http://localhost:3000");
});

// in nodejs model is the collection of data (also known as collection in monodb)
// the model will contain the information we need
// in mongoose we call it schema
