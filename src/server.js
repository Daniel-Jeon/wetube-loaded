// server.js
// 유저가 node_modules/express 할 필요없이 npm이 추적
import express from "express";

const PORT = 4000;

// express application 생성(express 설계를 위한 룰)
// express function을 사용하면 생성
// app이 listen 할 수 있게 해야함
const app = express();

// application을 설정한 다음 외부에 개방

// 누군가 root로 GET request를 보낸다면, function 실행
// 그냥 c.log는 에러 뜸
const handleHome = () => console.log("Somebody is trying to go home!");
app.get("/*", handleHome);

// listen에는 callback이 있음
// 여기에서 외부 접속을 listen
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 👍`);
app.listen(PORT, handleListening);
