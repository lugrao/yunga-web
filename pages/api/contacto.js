export default function (req, res) {
  const nodemailer = require("nodemailer")
  const pass = process.env.GMAIL_PASSWORD

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ezequiellugaro@gmail.com",
      pass: pass,
    },
    secure: true,
  })

  const email = {
    from: "ezequiellugaro@gmail.com",
    to: "ezequiellugaro@gmail.com",
    subject: `Mensaje de ${req.body.nombre}`,
    text: req.body.consulta,
    html: `<div>
            <p><b>Nombre:</b> ${req.body.nombre}</p>
            <p><b>Teléfono:</b> ${req.body.telefono}</p>
            <p><b>Email:</b> ${req.body.email}</p>
            <br>
            <p><b>Consulta:</b></p>
            <pre style="font-family:sans-serif">${req.body.consulta}</pre>
          </div>`,
  }

  transporter.sendMail(email, (err, info) => {
    if (err) console.log(err)
    else console.log(info)
  })

  res.status(200)
}
