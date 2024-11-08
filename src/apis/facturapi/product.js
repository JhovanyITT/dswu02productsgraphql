const facturapi = require('./connection');

// c) Crea una factura

async function createProduct(product){
    const facturapiProduct = {
        description: product.description,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function updateProduct(id, product){
    const facturapiProduct = {
        description: product.description,
        price: product.price
    };
    return await facturapi.products.update(id, facturapiProduct);
}

async function deleteProduct(id){
    return await facturapi.products.del(id);
}

module.exports = {  createProduct, updateProduct, deleteProduct };