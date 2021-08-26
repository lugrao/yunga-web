import styles from "./Boton.module.css";

export default function Boton({ texto }) {
  return <button className={styles.boton}>{texto}</button>;
}
