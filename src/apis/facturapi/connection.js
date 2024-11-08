// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi("sk_test_XMKk6DdxqWE8jQJ3RLM03YMm8z2w0lgOLbANz4o9Zv");

module.exports = facturapi;