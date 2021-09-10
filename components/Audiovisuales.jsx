import styles from "./Audiovisuales.module.css"
import Titulo from "./Titulo"
import Image from "next/image"
import imagenFondo from "../public/static/img/audiovisuales.jpg"
import Carrusel from "./Carrusel"

export default function Audiovisuales() {
  return (
    <section id="audiovisuales" className={styles.contenedor}>
      <Image
        src={imagenFondo}
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
      <Titulo texto="Audiovisuales" />
      <Carrusel />
    </section>
  )
}
