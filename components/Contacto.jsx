import styles from "./Contacto.module.css";
import Image from "next/image";
import Titulo from "./Titulo";
import Boton from "./Boton";

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
        <Boton texto="Enviar" />
      </form>

      <div className={styles.redes}>
        <a href="https://www.facebook.com/yunga.audiovisual/" target="_blank">
          <Image
            src="/static/svg/redes/facebook.svg"
            alt=""
            height={50}
            width={50}
          />
        </a>

        <a
          href="https://open.spotify.com/artist/6eD88Q8ph7zUGQvqAQBIjq"
          target="_blank"
        >
          <Image
            src="/static/svg/redes/spotify.svg"
            alt=""
            height={50}
            width={50}
          />
        </a>

        <a
          href="https://www.youtube.com/channel/UC6mpjFP43E-xoeRP4lm1pNg"
          target="_blank"
        >
          <Image
            src="/static/svg/redes/youtube.svg"
            alt=""
            height={50}
            width={50}
          />
        </a>

        <a href="https://www.instagram.com/yunga.audiovisual/" target="_blank">
          <Image
            src="/static/svg/redes/instagram.svg"
            alt=""
            height={50}
            width={50}
          />
        </a>
      </div>
    </section>
  );
}
