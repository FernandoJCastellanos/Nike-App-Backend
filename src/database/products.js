const {ObjectId} = require("mongodb");
const getDB = require("./db");



const getAllProducts = async () => {
    // we are calling the prop (product) from the db file
    return await getDB().products.find().toArray();
};

const getProduct = async (id) => {
    return await getDB().products.findOne({_id: new ObjectId(id)});
};

module.exports = {
    getAllProducts,
    getProduct,
};