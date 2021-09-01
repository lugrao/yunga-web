import styles from "./Discografía.module.css"
import Titulo from "./Titulo"
import Image from "next/image"

const obras = [
  {
    titulo: "Sueños",
    foto: "/static/img/discografía-Sueños.jpg",
    spotify: "https://open.spotify.com/album/15n13WcxcwKKpDAbUFE2Ot",
    youtube: "https://youtu.be/tgS09I2GNmo",
  },
  {
    titulo: "Casita",
    foto: "/static/img/discografía-Casita.jpg",
    spotify: "https://open.spotify.com/track/2YBco30w3aDVWzEPJpNaRh",
    youtube: "https://youtu.be/hNx78lOYRvg",
  },
  {
    titulo: "Limbo",
    foto: "/static/img/discografía-Limbo.jpg",
    spotify: "https://open.spotify.com/album/0oVB5EnxfiZ3zhqL0emB5N",
    youtube: "https://youtu.be/Xgx9pg9h9Fc",
  },
]

export default function Discografía() {
  return (
    <section id="discografia" className={styles.contenedorSeccion}>
      <Titulo texto="Discografía" />
      <div className={styles.contenedorImagenes}>
        {obras.map((obra, idx) => (
          <div key={idx} className={styles.imagen}>
            <Image src={obra.foto} width="300" height="300" />
            <div className={styles.enlaces}>
              <a href={obra.spotify} target="_blank" alt="Link a Spotify">
                <Image
                  src="/static/svg/discografía/spotify.svg"
                  target="_blank"
                  height="50"
                  width="50"
                />
              </a>
              <a href={obra.youtube} target="_blank" alt="Link a YouTube">
                <Image
                  src="/static/svg/discografía/youtube.svg"
                  target="_blank"
                  height="50"
                  width="50"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
