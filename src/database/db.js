const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://test:SwprwcVHJK4Q4bJc@cluster0.lgsddsq.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);
console.log(client)
const database = client.db("test");
const products = database.collection("products");
const orders = database.collection("orders");

module.exports = {
    products,
    orders,
}




















