import styles from "./Contacto.module.css";
import Titulo from "./Titulo";
import Redes from "./Redes";

export default function Contacto() {
  function enviarMail(event) {
    event.preventDefault();
  }

  return (
    <section id="contacto" className={styles.contenedor}>
      <Titulo texto="Contacto" />
      <form className={styles.formulario} onSubmit={enviarMail}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Teléfono" />
        <textarea rows="10" placeholder="Consulta"></textarea>
        <button className={styles.boton}>Enviar</button>
      </form>
      <Redes />
    </section>
  );
}
