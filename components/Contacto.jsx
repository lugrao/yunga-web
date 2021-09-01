import styles from "./Contacto.module.css"
import Titulo from "./Titulo"
import Redes from "./Redes"
import { useState } from "react"

export default function Contacto() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [consulta, setConsulta] = useState("")
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  console.log(consulta)

  function enviarMail(event) {
    event.preventDefault()
    console.log("Enviando mail...")

    let mensaje = {
      nombre,
      email,
      telefono,
      consulta,
    }

    fetch("/api/contacto", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensaje),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Mail enviado.")
        console.log(res.status)
        setMensajeEnviado(true)
      } else {
        console.log(res.status)
      }
    })
  }

  return (
    <section id="contacto" className={styles.contenedor}>
      <Titulo texto="Contacto" />
      <form className={styles.formulario} onSubmit={enviarMail}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          onChange={(e) => setTelefono(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="Consulta"
          onChange={(e) => setConsulta(e.target.value)}
        ></textarea>
        <button className={styles.boton}>Enviar</button>
      </form>
      <Redes />
    </section>
  )
}
