import styles from "./Bio.module.css";
import Titulo from "./Titulo";
import Image from "next/image";

export default function Bio() {
  function manejarClick() {
    console.log("asd123");
  }
  return (
    <section id="biografia" className={styles.contenedor}>
      <Image src="/static/img/bio.jpg" layout="fill" objectFit="cover" />
      <Titulo texto="Bio" />
      <div className={styles.cuerpo}>
        <p onClick={manejarClick}>
          Yunga nace en invierno de 2017 en la ciudad de La Plata, con la idea
          de expresarse mediante el cruce de la interpretación musical y el
          lenguaje audiovisual.
        </p>
        <p>
          Además del formato “cine con música en vivo”, la banda suele
          presentarse musicalizado muestras de danza, circo, acrobacia, poesía,
          improvisaciones y jam de dibujo.
        </p>
        <p>
          En 2019 lanza su primer disco, <i>Sueños</i>, conformado por seis
          composiciones originales.
        </p>
        <p>
          En 2020 lanza un nuevo single, <i>Casita</i>, en formato videoclip.
        </p>
        <p>
          En 2021 lanza su segundo videoclip, <i>Limbo</i>, incluido en&nbsp;
          <i>Sueños</i>.
        </p>
        <p>
          Actualmente la banda está conformada por Oscar Luna (saxo, voz y
          teclado), Tomás Lupo (bajo), Ariel Apesteguía (sintetizador y voz),
          José Galaz (batería) y José Manuel Gauna (guitarra).
        </p>
      </div>
    </section>
  );
}
