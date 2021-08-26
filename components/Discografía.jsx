import styles from "./Discografía.module.css";
import Titulo from "./Titulo";

export default function Discografía() {
  return (
    <section id="discografia" className={styles.contenedor}>
      <Titulo texto="Discografía" />
      <iframe 
      className={styles.iframe}
      src="https://open.spotify.com/embed/album/15n13WcxcwKKpDAbUFE2Ot"
      width="300"
      height="300"
      allowtransparency="true"
      allow="encrypted-media"
      />
    </section>
  );
}
