const sgMail = require('./connection')

async function send(User, subject, HTMLpart) {
    try {
        const msg = {
            to: User.email, // Dirección del destinatario
            from: 'jhgajaimefe@ittepic.edu.mx', // Debe ser un correo verificado en SendGrid
            subject: subject, // Asunto del correo
            html: HTMLpart, // Contenido HTML del correo
        };
        // Enviar el correo
        await sgMail.send(msg);
        console.log('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo:', error.response ? error.response.body : error.message);
    }
}

module.exports = {
    send
}