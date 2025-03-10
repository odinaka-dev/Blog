const express = require("express");
const { config } = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const { message } = require("statuses");

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
  author: String,
});

const Blogs = mongoose.model("blogs", blogschema);

// the post request
// app.post(`${api}/blogs`, (req, res) => {
//   const Blog = new Blogs({
//     title: req.body.title,
//     description: req.body.description,
//     author: req.body.author,
//   });

//   Blog.save()
//     .then((createdProduct) => {
//       res.status(201).json(createdProduct);
//     })
//     .catch((error) => {
//       res.status(500).json({
//         error: error,
//         success: false,
//       });
//       console.error(error);
//     });
// });
app.post(`${api}/blogs`, async (req, res) => {
  try {
    const blog = new Blogs({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      author: req.body.author,
    });

    const createdBlog = await blog.save();
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog: createdBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message,
    });
  }
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

// GET request for a specific blog by ID
app.get(`${api}/blogs/:id`, async (req, res) => {
  const { id } = req.params; // Capture the id from the URL

  try {
    const blog = await Blogs.findById(id); // Find blog by id

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch the blog",
      error: error.message,
    });
  }
});

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
