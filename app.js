// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';
// const dbName='fruitsDB';

// const client = new MongoClient(url);


// // Client Connects to DataBase and if there is no fruitsDB then create it
// // If there are no errors then we successfully console log that the server is running
// client.connect(function(err){
//     assert.equal(null,err);
//     console.log("Connected to Server");
//     const db=client.db(dbName);
//     insertDocuments(db,function(){
//         client.close();
//     })
// });

// const insertDocuments=function(db,callback){
//     const collection=db.collection('fruits');

//     collection.insertMany([
        // {
        //     name:"Apple",
        //     score:8,
        //     review:"Great Fruit"
        // },
        // {
        //     name:"Orange",
        //     score:6,
        //     review:"Kinda Sour"
        // },
        // {
        //     name:"Banana",
        //     score:9,
        //     review:"Great Stuff"
        // }
//     ],function(err,result){
//         assert.equal(err,null);
//         assert.equal(3,result.result.n);
//         assert.equal(3,result.ops.length);
//         console.log("Inserted 3 docs");
//         callback(result);
//     });
// };

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  client.connect();
  const database = client.db("fruits_DB");
  const fruits = database.collection("fruits");
  try {
    // const doc = [
    //     {
    //         _id:10,
    //         name:"Apple",
    //         score:8,
    //         review:"Great Fruit"
    //     },
    //     {
    //         _id:11,
    //         name:"Orange",
    //         score:6,
    //         review:"Kinda Sour"
    //     },
    //     {
    //         _id:12,
    //         name:"Banana",
    //         score:9,
    //         review:"Great Stuff"
    //     }
    // ]
    // const result = await fruits.insertMany(doc);

    // console.log(`3 document was inserted with the _id: ${result.insertedIds}`);

    await findAllDocs(database,'fruits');
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


// 8th video 17:00

async function findAllDocs(database,coll) {
  try {
    const items=await database.collection(coll).find({}).toArray();
    console.log(items);
  } finally {
    console.log("search complete");
  }
}