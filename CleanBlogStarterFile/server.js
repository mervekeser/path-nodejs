const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");

const app = express();

//Connect DB
mongoose.connect("mongodb://localhost/clean-blog");

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//Routes
//get all
app.get("/", async (req, res) => {
  const posts = await Post.find({}).sort("-dateCreated");
  res.render("index", {
    posts,
  });
});

//get by id
app.get("/posts/:id", async (req, res) => {
  //console.log(req.params.id);
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add_post");
});

//create
app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

//update
app.get("/posts/edit/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("edit", {
    post,
  });
});

app.put("/posts/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
});

//delete
app.delete("/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
