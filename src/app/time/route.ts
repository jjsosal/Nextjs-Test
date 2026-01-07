import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB ?? "", {
  maxPoolSize: 5,
});

export async function GET() {
  const db = client.db("sessions");
  const collection = db.collection("sessions");

  const all = await collection.findOne();

  /*  return Response.json(
    {
      time: Date.now(),
      data: all,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );*/

  console.log(all);
  return Response.json({
    all: all,
    data: "hola",
  });
}
