const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://fjc:fLdS7bDpVclawuV1@cluster0.lgsddsq.mongodb.net/<database>?retryWrites=true&w=majority";


const client = new MongoClient(uri);
console.log(client)
const database = client.db("test");
const products = database.collection("products");
const orders = database.collection("orders");

module.exports = {
    products,
    orders,
}




