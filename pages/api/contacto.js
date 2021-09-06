export default function (req, res) {
  const nodemailer = require("nodemailer")
  const emailEmisor = process.env.GMAIL_ADDRESS
  const passEmisor = process.env.GMAIL_PASSWORD

  const { nombre, telefono, email, consulta } = req.body
  if (!consulta) {
    res.status(400)
    res.send()
    return
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: emailEmisor,
      pass: passEmisor,
    },
    secure: true,
  })

  const mensaje = {
    from: emailEmisor,
    to: emailEmisor,
    subject: `Mensaje de ${nombre}`,
    text: consulta,
    html: `<div>
            <p><b>Nombre:</b> ${nombre}</p>
            <p><b>Teléfono:</b> ${telefono}</p>
            <p><b>Email:</b> ${email}</p>
            <br>
            <p><b>Consulta:</b></p>
            <pre style="font-family:sans-serif">${consulta}</pre>
          </div>`,
  }

  transporter.sendMail(mensaje, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
      res.status(200)
      res.send()
    }
  })
}
