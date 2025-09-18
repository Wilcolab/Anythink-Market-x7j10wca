const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// type "// Hey GitHub Copilot, " and see if it completes your sentence
// Hey GitHub Copilot, create a route to get all comments for a specific post
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Add anither endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});