const Product = require('../models/productModel');
const facturapi = require('../apis/Facturapi/product')

const productService = {
  getProducts: async () => await Product.find(),
  createProduct: async (args) => {
    const product = new Product(args);
    const facturapiProduct = await facturapi.createProduct(product);
    product.facturapiid = facturapiProduct.id;
    return await product.save();
  },
  updateProduct: async ({ _id, ...rest }) => {
    const updatedProduct = await Product.findByIdAndUpdate(_id, rest, { new: true });
    facturapi.updateProduct(updatedProduct.facturapiid,updatedProduct);
    return updatedProduct;
  },
  deleteProduct: async (_id) => {
    const deletedProduct = await Product.findByIdAndDelete(_id);
    facturapi.deleteProduct(deletedProduct.facturapiid);
    return deletedProduct;
  }
};

module.exports = productService;
