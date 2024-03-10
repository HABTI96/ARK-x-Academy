const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

const db = client.db("mydbChallenge")
const collection = db.collection("Users")

// collection
// .insertMany([{name:"mohammed habti", age:27},{name:"alex", age:30},{name:"abdo",age:23}])
// .then((user=>console.log("user created successfully ", user)))
// .catch((err)=>console.log("Error:",err))

collection
.find()
.toArray()
.then((data)=>console.log("all users:",data))
.catch((err)=>console.log("can not retrieve:", err))
