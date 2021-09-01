import styles from "./Portada.module.css";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions.ts";

export default function Portada() {
  const { width } = useWindowDimensions();

  return (
    <section id="portada" className={styles.contenedor}>
      {width < 768 && (
        <video className={styles.video} muted autoPlay loop>
          <source src="/static/video/portada-m.mp4" type="video/mp4" />
        </video>
      )}
      {width >= 768 && (
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
  );
}
