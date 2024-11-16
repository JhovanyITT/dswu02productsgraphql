// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('FACTURAPI-API-KEY');

module.exports = facturapi;
