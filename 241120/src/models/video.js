import mongoose from "mongoose";

export const formHashtags = (hashtags) => {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
};

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    uppercase: true,
    maxLength: 80,
    required: true,
  },
  description: { type: String, trim: true, minLength: 20, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

// videoSchema.pre("save", async function () {
//   this.hashtags = this.hashtags[0]
//     .split(",")
//     .map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

const Video = mongoose.model("Video", videoSchema);
export default Video;
