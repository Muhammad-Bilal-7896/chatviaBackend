import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// 1) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 1= This section will help you get a list of all the chats
router.get("/", async (req, res) => {
  let collection = await db.collection("chats");
  let results = await collection.find({}).toArray();
  res.status(200).send({ message: "All chats fetched successfully", chats: results });
});

// This section will help you get a single chat by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("chats");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.status(404).send({ message: "Chat not found" });
  } else {
    res.status(200).send({ message: "Chat fetched successfully", chat: result });
  }
});

// 2= This section will help you create a new chat.
router.post("/", async (req, res) => {
  let newChat = {
    userIDSender: req.body.userIDSender,
    userNameSender: req.body.userNameSender,
    userIDReceiver: req.body.userIDReceiver,
    userNameReceiver: req.body.userNameReceiver,
    message: req.body.message,
    timeSent: req.body.timeSent,
    isUserOnline: req.body.isUserOnline,
    loggedInUser: req.body.loggedInUser
  };
  let collection = await db.collection("chats");
  let result = await collection.insertOne(newChat);
  res.status(201).send({ message: "Chat created successfully", chat: result.ops[0] });
});

// 3= This section will help you update a chat by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      userIDSender: req.body.userIDSender,
      userNameSender: req.body.userNameSender,
      userIDReceiver: req.body.userIDReceiver,
      userNameReceiver: req.body.userNameReceiver,
      message: req.body.message,
      timeSent: req.body.timeSent,
      isUserOnline: req.body.isUserOnline,
      loggedInUser: req.body.loggedInUser
    }
  };

  let collection = await db.collection("chats");
  let result = await collection.updateOne(query, updates);

  if (result.modifiedCount > 0) {
    res.send({ message: "Chat updated successfully" }).status(200);
  } else {
    res.send({ message: "No chat found for the provided ID" }).status(404);
  }
});

// 4= This section will help you delete a chat
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("chats");
  let result = await collection.deleteOne(query);

  if (result.deletedCount > 0) {
    res.send({ message: "Chat deleted successfully" }).status(200);
  } else {
    res.send({ message: "No chat found for the provided ID" }).status(404);
  }
});

export default router;