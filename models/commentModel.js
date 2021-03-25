const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comments: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
})
const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;