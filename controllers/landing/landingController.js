import { emailPlantilla, sendMail } from "../../helpers/sendEmail.js"

const getLanding = (req, res) => {
    res.render('landing/landing', {
        title: 'Bienvenido(a) a Zamora',
        csrfToken: req.csrfToken(),
    })
}

const postSendContact = async(req, res) => {
    try {
        sendMail("contacto@zamoraestructuras.pe", "Contacto", emailPlantilla(req.body.nombres, req.body.apellidos, req.body.empresa, req.body.mensaje));
        res.status(200).json('todo ok');
    } catch (error) {
        console.log(error)
    }
}

export {
    getLanding,
    postSendContact
}