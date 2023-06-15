import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import chat from "./routes/chat.mjs";
import chatUsersList from "./routes/chatUsersList.mjs";
import login from "./routes/login.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chat);
app.use("/chatUsersList", chatUsersList);
app.use("/login", login);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
