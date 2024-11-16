// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi("API_KEY_HERE");
const facturapiTorres = new Facturapi(sk_test_v7gw215dbQVnYyBpXlbyL2kKkEjP9lALaeDRMNWqr6);

module.exports = facturapi;
