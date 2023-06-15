import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://bilalmohib7896:PhaEvQaTLi3Pfiq8@cluster0.tchq4bt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("cluster0");

if (db) {
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} else {
  console.log("Something went wrong. Check your connection string.");
}

export default db;