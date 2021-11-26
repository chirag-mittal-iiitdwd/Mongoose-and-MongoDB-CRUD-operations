const mongoose = require('mongoose')
// Creates the database and connects to it
mongoose.connect("mongodb://localhost:27017/fruitsDB")

// This is the predifined Schema for documents
const fruitsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Check your data entry, no name specified"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});

// The collection name is Fruit but gets converted to fruits
const Fruit=mongoose.model("Fruit",fruitsSchema);

// const fruit=new Fruit({
//     rating:10,
//     review:"Good Fruit"
// });

// fruit.save();

// mongoose.connect("mongodb://localhost:27017/personDB")
const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitsSchema
});

const Person = mongoose.model("Person",personSchema);
const pineapple = new Fruit({
    name:"Pineapple",
    rating:9,
    review:"Great Fruit"
});

const jackFruit = new Fruit({
    name:"jackFruit",
    rating:9,
    review:"Great Fruit"
});
jackFruit.save();


// pineapple.save();

const person=new Person({
    name:"Amy",
    age:12,
    favouriteFruit:pineapple
});

// person.save();

const kiwi = new Fruit({
    name:"Kiwi",
    score:10,
    review:"The best Fruit"
});

const banana = new Fruit({
    name:"Banana",
    score:10,
    review:"The best Fruit"
});

const Orange = new Fruit({
    name:"Orange",
    score:10,
    review:"The best Fruit"
});

// Fruit.insertMany([kiwi,Orange,banana],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Sucess");
//     }
// })

function printData(collection){
    collection.find(function(err,fruits){
        if(err){
            console.log(err);
        }
        else{
            // mongoose.connection.close();
            console.log(fruits);
        }
    });
};

// 3rd video

// Fruit.updateOne({_id:"619f754c5f9f2a11926f81f3"},{name:"Peach",review:"Good and Healthy Fruit"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success")
//     }
// });

// Fruit.deleteOne({_id:"619f754c5f9f2a11926f81f3"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         // mongoose.connection.close();
//         console.log("Success");
//     }
// })

// printData(Fruit);
// printData(Person);
// Person.deleteMany({name:"John"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("SUCCESS");
//     }
// })

// printData(Person);


Person.updateOne({_id:"619fd9f87b9d00dea335b919"},{favouriteFruit:jackFruit},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Success");
    }
});