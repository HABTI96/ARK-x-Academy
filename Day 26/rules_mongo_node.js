const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

const db = client.db('mydb'); // creat new database 'mydb'
const collection = db.collection('users'); // creat a collection in database 'mydb'

// collection
//   .insertOne({ name: "Arkadian", age: "25" }) // add data to the collection 'users'
//   .then((user) => console.log("User Created Successfully: ", user))
//   .catch((error) => console.log("Error: ", error));

collection
  .findOne({ name: "Arkadian" })  // find one collection by just type a name of key 
  .then((user) => console.log("==>",user))
  .catch((error) => console.log("Error: ", error));

// collection
// .find()        // find all users
// .toArray() 
// .then((data)=>console.log("all users:",data))
// .catch((err)=>console.log("can not retrieve:", err))

collection
.deleteOne({name:"arkadian"})
.then(res=>console.log("Deleted"))
.catch(err=>console.log("Error",err))