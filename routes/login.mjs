import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// Login a user
router.post("/", async (req, res) => {
    const { email, password } = req.body;

    let collection = await db.collection("registeredUsers");
    let query = { email: email, password: password };
    let result = await collection.findOne(query);

    if (result) {
        res.status(200).send({ message: "Login successful", user: result });
    } else {
        res.status(401).send({ message: "Invalid email or password" });
    }
});

export default router;
