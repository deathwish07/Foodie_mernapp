const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const mongoURI = 'mongodb+srv://deathwish07:Athuu007@clster0.ip6panv.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected");
        }
    })
}

module.exports = mongoDB;
