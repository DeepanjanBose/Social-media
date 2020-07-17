const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;
// Create Schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  likes: [{ type: ObjectId, ref: "users" }],
  comments: [
    {
      text: String,
      postedBy: {
        type: ObjectId,
        ref: "users",
      },
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: "users",
  },
});
mongoose.model("posts", postSchema);
