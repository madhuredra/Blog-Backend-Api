const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username:{
        type:String,
        required : true,
    }
  },
  { timestamps: true }
);

const PostModel = mongoose.model("User", PostSchema);

module.exports = PostModel;
