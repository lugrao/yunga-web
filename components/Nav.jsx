import { useState } from "react"
import styles from "./Nav.module.css"
import Image from "next/image"

const secciones = [
  { nombre: "Audiovisuales", href: "#audiovisuales" },
  { nombre: "Discografía", href: "#discografia" },
  { nombre: "Bio", href: "#biografia" },
  { nombre: "Contacto", href: "#contacto" },
]

function LogoYunga() {
  return (
    <a href="#portada">
      <div className={styles.img}>
        <Image src="/static/svg/nav/yunga.svg" width="300" height="100" />
      </div>
    </a>
  )
}

export default function Nav({ width }) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  return (
    <div id="navbar">
      {width >= 768 ? (
        // Nav desktop
        <div className={styles.nav}>
          <ul>
            <li>
              <LogoYunga />
            </li>
            {secciones.map((seccion, i) => (
              <li key={i}>
                <a href={seccion.href}>{seccion.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Nav mobile
        <div className={styles.navMobile}>
          <div className={styles.navMobileBarra}>
            <div onClick={() => setMenuAbierto(false)}>
              <LogoYunga />
            </div>

            <div
              onClick={() => setMenuAbierto(!menuAbierto)}
              className={`${styles.navMobileBtn} ${
                menuAbierto ? styles.navMobileBtnCruz : ""
              }`}
            >
              <div className={styles.barra1}></div>
              <div className={styles.barra2}></div>
              <div className={styles.barra3}></div>
            </div>
          </div>
          <div
            className={`${styles.navMobileMenu} ${
              menuAbierto ? styles.navMobileMenuAbierto : ""
            }`}
          >
            <ul>
              {secciones.map((seccion, i) => (
                <li key={i} onClick={() => setMenuAbierto(false)}>
                  <a href={seccion.href}>{seccion.nombre}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
