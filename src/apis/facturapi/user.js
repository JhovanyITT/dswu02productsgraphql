const facturapi = require('./connection');

// c) Crea un usuario

async function createUser(user){
    const facturapiUser = {
        legal_name: user.fullName,
        tax_id: "ABC101010111",
        tax_system: "601",
        address: user.address,
        email: user.email
    };
    return await facturapi.customers.create(facturapiUser);
}

async function updateUser(id, user){
    const facturapiUser = {
        legal_name: user.fullName,
        address: user.address,
        email: user.email
    };
    return await facturapi.customers.update(id, facturapiUser);
}

async function deleteUser(id){
    return await facturapi.customers.del(id);
}

module.exports = {  createUser, updateUser, deleteUser };