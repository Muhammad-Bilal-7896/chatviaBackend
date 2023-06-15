import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// 2) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ chatUserList @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 1= This section will help you get a list of all the chatUserList
router.get("/", async (req, res) => {
  let collection = await db.collection("chatUserList");
  let results = await collection.find({}).toArray();
  res.status(200).send({ message: "All chatUserList fetched successfully", chatUserList: results });
});

// 2= This section will help you get a single chatUserList by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("chatUserList");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.status(404).send({ message: "Chat users list not found for the provided ID" });
  } else {
    res.status(200).send({ message: "Chat user data fetched successfully", chatUserList: result });
  }
});

// 3= This section will help you create a new chatUserList.
router.post("/", async (req, res) => {
  let newChatUser = {
    userID: req.body.userID,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userImage: req.body.userImage,
    isUserOnline: req.body.isUserOnline,
    loggedInUser: req.body.loggedInUser
  };

  let collection = await db.collection("chatUserList");
  let result = await collection.insertOne(newChatUser);
  res.status(201).send({ message: "A New User for the Chat has been created successfully", chat: result.ops[0] });
});

// 4= This section will help you update a chatUserList by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      userID: req.body.userID,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userImage: req.body.userImage,
      isUserOnline: req.body.isUserOnline,
      loggedInUser: req.body.loggedInUser
    }
  };

  let collection = await db.collection("chatUserList");
  let result = await collection.updateOne(query, updates);

  if (result.modifiedCount > 0) {
    res.send({ message: "Chat user updated successfully" }).status(200);
  } else {
    res.send({ message: "No chat user found for the provided ID" }).status(404);
  }
});

// 5= This section will help you delete a chatUserList
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("chatUserList");
  let result = await collection.deleteOne(query);

  if (result.deletedCount > 0) {
    res.send({ message: "Chat user record deleted successfully" }).status(200);
  } else {
    res.send({ message: "No chat user record found for the provided ID" }).status(404);
  }
});

export default router;