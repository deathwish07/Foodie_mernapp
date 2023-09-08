const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const mongoURI = 'mongodb://deathwish07:Athuu007@ac-qkrlde7-shard-00-00.ip6panv.mongodb.net:27017,ac-qkrlde7-shard-00-01.ip6panv.mongodb.net:27017,ac-qkrlde7-shard-00-02.ip6panv.mongodb.net:27017/foodie_mern?ssl=true&replicaSet=atlas-9xzl0m-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log();
            })
        }
    })
}

module.exports = mongoDB;
