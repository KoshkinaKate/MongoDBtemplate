//responsible for connecting the Mongoose DB to the Express Server Application
require("dotenv").config()

const mongoose =  require('mongoose')

const connectToDb = async() => {

await mongoose.connect(process.env.DB_URL);
// this is how app connects to Mongo (link taken from web page Compass => link)
console.log("Currently Connected to MongoDB Cluster")
}
module.exports = connectToDb