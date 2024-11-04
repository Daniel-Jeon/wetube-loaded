import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  /* 수동적으로 할수도 있던 것들을 mongoose덕에 자동으로 할 수 있음
     데이터에 대한 구체적인 설정을 하는게 중요함 */
  title: { type: String, required: true, trim: true, maxLenth: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now() },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
