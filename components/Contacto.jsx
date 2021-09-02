import { useState } from "react"
import styles from "./Contacto.module.css"
import Image from "next/image"
import Titulo from "./Titulo"
import Redes from "./Redes"

export default function Contacto() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [consulta, setConsulta] = useState("")
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

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
        setMensajeEnviado(true)
        console.log(res.status)
      } else {
        console.log(res.status)
      }
    })
  }

  return (
    <section id="contacto" className={styles.contenedor}>
      <Image src="/static/img/contacto.jpg" layout="fill" objectFit="cover" />
      <Titulo texto="Contacto" />

      {!mensajeEnviado ? (
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
      ) : (
        <div className={styles.formulario}>
          <h2>Una locura.</h2>
        </div>
      )}

      <Redes />
    </section>
  )
}
