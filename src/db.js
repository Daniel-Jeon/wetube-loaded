import mongoose from "mongoose";

//mongoose.connect("mongodb://127.0.0.1:27017/wetube");
mongoose.connect("mongodb://127.0.0.1:27017/wetube-loaded", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// db가 연결되면 log가 나오는 이벤트
// on은 접속시 한번만 발생할 때, once는 연속적으로 발생할 수 있을 때 사용
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("");

db.on("error", handleError);
db.once("open", handleOpen);
