import styles from "./Portada.module.css"
import Link from "next/link"

export default function Portada({ width }) {
  return (
    <section id="portada" className={styles.contenedor}>
      {width < 769 && (
        <video className={styles.video} muted autoPlay loop>
          <source src="/static/video/portada-m.mp4" type="video/mp4" />
        </video>
      )}
      {width >= 769 && (
        <video className={styles.video} muted autoPlay loop>
          <source src="/static/video/portada.mp4" type="video/mp4" />
        </video>
      )}
      <Link href="#audiovisuales">
        <a>
          <img src="/static/svg/doble-flecha-abajo.svg" alt="Flecha abajo" />
        </a>
      </Link>
    </section>
  )
}
