const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://123raza83:raza123@kifayatly-shop.wffnskl.mongodb.net/?appName=Kifayatly-Shop";
const client = new MongoClient(uri);

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    
    const db = client.db('kifayatly-shop');
    const count = await db.collection('projects').countDocuments();
    console.log(`There are ${count} projects in the database.`);
    
  } catch (err) {
    console.error("Connection failed!", err);
  } finally {
    await client.close();
  }
}
run();
