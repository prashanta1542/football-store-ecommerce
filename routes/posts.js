// routes/posts.js
const express = require('express');
const Post = require('../models/Post'); // Import Post model
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const newPost = await Post.create({ title, content, userId });
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
