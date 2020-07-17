const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },pic:{
    type:String,
    default:"https://res.cloudinary.com/deepanjan99/image/upload/v1594441230/no-image-icon-1_dzjk0a.png"
  },
  followers: [{ type: ObjectId, ref: "users" }],
  following: [{ type: ObjectId, ref: "users" }],
});
mongoose.model("users", UserSchema);
