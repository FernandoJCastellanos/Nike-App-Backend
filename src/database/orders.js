const getDB = require("./db");



const getOrder = async (ref) => {
    // its should be     return await db.orders.findOne({key: value}) when they are the same you can keep 1
    return await getDB().orders.findOne({ref})
};


const createOrder = async (order) => {

    const result = await getDB().orders.insertOne(order);
    return {...order, _id: result.insertedId};
};


module.exports = {

    getOrder,
    createOrder,

}
