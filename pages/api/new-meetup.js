import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //Add this to our database
    const client = await MongoClient.connect(
      "mongodb+srv://admin-manu:test123@cluster0.aakqo.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}

export default handler;
