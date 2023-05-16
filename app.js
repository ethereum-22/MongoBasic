// Create DataBase and Connect with MongoDB Server.

const mongoose=require('mongoose');    // Require Package From Mongoose.

// Connect Mongo Database and also create fruitsDB if it doesn't exists.
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true,useUnifiedTopology: true,
family: 4},

      //console.log("MongoDB Connection Succeeded.");
   
);


// Create a Schema and We define that how the structure of a particular database in this schema.
const fruitSchema=new mongoose.Schema({
    name: String,
    rating: Number,
    review: String

});


// create a mongoose model and specify two parameters.First name of the collection that is compliy the particular schema.And in this case we create a collection of fruits(each as individual records) and that will be inside our database called fruitsDB.First Parameter is a string and obviously singular name of the collection.(i.e if you have a collection of Fruits and you have to put here is Fruit because it is singular.).And mongoose is cleverly convert this singular string into a pluraral form.

/*

const Fruit=mongoose.model("Fruit",fruitSchema);

// create a new fruit document  form model
const apple=new Fruit({

    name: 'Apple',
    rating: 8,
    review:'Very juicy and delicious.'
})


//fruit.save()   // this is save method in mongoose to save this fruit documments.

const personSchema=new mongoose.Schema({
    name: String,
    age: Number
});

/*
const Person=mongoose.model('Person',personSchema);

const person=new Person({
    name:'John',
    age:37

});
//person.save();



const kiwi=new Fruit({

    name: 'Kiwi',
    rating: 10,
    review:'Best Fruit Ever'
})


const orange=new Fruit({

    name: 'Orange',
    rating: 7,
    review:'Oranges are looks beautiful and delicious'
})


const banana=new Fruit({

    name: 'Banana',
    rating: 6,
    review:'Banana are avarage'
})


// Here is the way of insert many at one time in  mongoose according to the documentation of mongoose but when i run this there saw an error and that is insert.many() not receive a callback.And after saw the error i delete the callback part form insert many option and after that it successfully runs.

// const arr = [{ name: 'Star Wars' }, { name: 'The Empire Strikes Back' }];
// Movies.insertMany(arr, function(error, docs) {});

// Here is the way to save many fruits at once.After deleting the callback from 

//Fruit.insertMany([kiwi,orange,banana]);





/*






const express=require('express')

const app=express();

const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true,useUnifiedTopology: true,
family: 4},
// (err) => {
//     if (!err) {
//       console.log("MongoDB Connection Succeeded.");
//     } else {
//       console.log("Error in DB connection : " + err);
//     }
//   }
);



*/






//Read Data from Database with MongoDB and Mongoose.
// We use.find() function which can accept a callback and it has two parameters.

Fruit.find({}).then(function(err,fruits)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(fruits);
    }
});



// Data Validation with mongoose.Here we use some mongose built-in Validator.

/*

const fruitSchema=new mongoose.Schema({
    name: {
        type:String,
        required:[true,'Please Check the data entry again, Data entry with no name is not added to the Database.']

    },
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String

});

*/



// Updating and Deleting Data from Database by using MongoDB and Mongoose.

//Suppose an user entry his data but badly misses the name while entering.And for that reason there need to be updata the data to the database.Suppose the user misses the name field of the Database.



// the updateOne function get three parameters.The first one is filter field briefly which field i want to modify and the second one is the value which is wanted to be updated and the last one is a callback function to print if any error is occured or log the success message.

// In the documentation there is more option in case of updateMany and normally update.Read the documentatioin and practice the example to get the better understanding.

/*

Fruit.updateOne({id: "5bslhfgjer7rrtw84tyet345sdf"},{name: "Peach"},function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Successfully Updated the document");
    }
})
*/


// Delete particular Record.

// DeleteOne get two parameter and the first parameter is condition that is which one we want to delete.And the second parameter is a callback function which normally shows if there is an error or not.If there is an error then we print the error message otherwise we print the Success message on the log.

/*

Fruit.deleteOne({name:"Peach"},function(err)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('Successfully deleted from the document.')
    }
})

*/


// Establishing Relationships and Embedding documents with mongoose.

// In this database we have two collections.One is fruits and another is people.

// Suppose here is a conditon that is the person has favourite fruit and this fruit comes from fruit schema. And here is the needed of relatoionship.And in below i develop a relationship between fruit schema and people schema and see the relationship clearly.


// I add a properties on person schema.



const personSchema=new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit:fruitSchema
});



const person=new Person({
    name:"Amy",
    age:12,
    favouriteFruit:pineapple   //Here pineapple is a fruit model.
})


// And here the pinepple is a fruit located in fruit database linked with people database.