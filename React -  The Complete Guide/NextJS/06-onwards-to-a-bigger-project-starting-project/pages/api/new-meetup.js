// /api/new-meetup
// POST /api/new-meetup

// NextJS will trigger this function for us when a request reaches this path

import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://dbUser:hvaIX5bXYdyXJbW2@cluster0.vpq0rkv.mongodb.net/",
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
