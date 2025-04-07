const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");

const app = express();

//Connect DB
mongoose.connect("mongodb://localhost/clean-blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add_post");
});

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
