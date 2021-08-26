import styles from "./Portada.module.css";

export default function Portada() {
  return (
      <section id="portada" className={styles.contenedor}>
        <video className={styles.video} muted autoPlay loop>
          <source src="/static/video/portada.mp4" type="video/mp4" />
        </video>
      </section>
  );
}
