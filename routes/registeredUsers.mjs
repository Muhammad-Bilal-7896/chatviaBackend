import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// 1) Get a list of all registered users
router.get("/", async (req, res) => {
    let collection = await db.collection("registeredUsers");
    let results = await collection.find({}).toArray();
    res.status(200).send({ message: "All registered users fetched successfully", registeredUsers: results });
});

// 2) Get a single registered user by ID
router.get("/:id", async (req, res) => {
    let collection = await db.collection("registeredUsers");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) {
        res.status(404).send({ message: "Registered user not found for the provided ID" });
    } else {
        res.status(200).send({ message: "Registered user fetched successfully", registeredUser: result });
    }
});

// 3) Create a new registered user
router.post("/", async (req, res) => {
    let newRegisteredUser = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    };

    let collection = await db.collection("registeredUsers");
    let result = await collection.insertOne(newRegisteredUser);
    res.status(201).send({ message: "New registered user created successfully", registeredUser: result.ops[0] });
});

// 4) Update a registered user by ID
router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
        $set: {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
    };

    let collection = await db.collection("registeredUsers");
    let result = await collection.updateOne(query, updates);

    if (result.modifiedCount > 0) {
        res.send({ message: "Registered user updated successfully" }).status(200);
    } else {
        res.send({ message: "No registered user found for the provided ID" }).status(404);
    }
});

// 5) Delete a registered user by ID
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("registeredUsers");
    let result = await collection.deleteOne(query);

    if (result.deletedCount > 0) {
        res.send({ message: "Registered user deleted successfully" }).status(200);
    } else {
        res.send({ message: "No registered user found for the provided ID" }).status(404);
    }
});

export default router;
