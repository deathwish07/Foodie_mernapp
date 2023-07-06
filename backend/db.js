const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const mongoURI = 'mongodb+srv://deathwish07:Athuu007@clster0.ip6panv.mongodb.net/foodie_mern?retryWrites=true&w=majority'
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
