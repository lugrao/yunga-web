import styles from "./Titulo.module.css"

export default function Titulo({ texto }) {
  return <h1 className={styles.titulo}>{texto}</h1>
}
