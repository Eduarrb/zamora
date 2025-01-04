import sgMail from '@sendgrid/mail';

const sendMail = (email, asunto, msj) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email, 
            from: 'noreply@zamoraestructuras.pe', 
            subject: asunto,
            html: msj
        };
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent');
            })
            .catch(error => {
                console.error(error);
                console.error(error.response.body);
            });
}

const emailPlantilla = (nombres, apellidos, empresa, mensaje) => {
    return `
            <h1 
                style="
                    text-align: center
                    font-family: Arial, Helvetica, sans-serif
                ";
            >
                Hola ${nombres} ${apellidos}, de la empresa "${empresa}"
            </h1>
            <p
                style="
                    font-family: Arial, Helvetica, sans-serif;
                "
            >
                ${mensaje}
            </p>
        `;
}

export { sendMail, emailPlantilla };