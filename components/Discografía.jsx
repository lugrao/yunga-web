import styles from "./Discografía.module.css"
import Titulo from "./Titulo"
import Image from "next/image"
import imagenFondo from "../public/static/img/discografía.jpg"
import imagenFondoMobile from "../public/static/img/discografía-mobile.png"

const obras = [
  {
    titulo: "Sueños",
    subtitulo: "(Álbum, 2019)",
    foto: "/static/img/discografía-Sueños.jpg",
    spotify: "https://open.spotify.com/album/15n13WcxcwKKpDAbUFE2Ot",
    youtube: "https://youtu.be/tgS09I2GNmo",
  },
  {
    titulo: "Casita",
    subtitulo: "(Single, 2020)",
    foto: "/static/img/discografía-Casita.jpg",
    spotify: "https://open.spotify.com/track/2YBco30w3aDVWzEPJpNaRh",
    youtube: "https://youtu.be/hNx78lOYRvg",
  },
  {
    titulo: "Limbo",
    subtitulo: "(Single, 2021)",
    foto: "/static/img/discografía-Limbo.jpg",
    spotify: "https://open.spotify.com/album/0oVB5EnxfiZ3zhqL0emB5N",
    youtube: "https://youtu.be/Xgx9pg9h9Fc",
  },
]

export default function Discografía({ width }) {
  return (
    <section id="discografia" className={styles.contenedorSeccion}>
      {width > 768 ? (
        <Image
          src={imagenFondo}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
        />
      ) : (
        <div className={styles.imgMobile}>
          <Image
            src={imagenFondoMobile}
            placeholder="blur"
            width={908}
            height={499}
          />
        </div>
      )}

      <Titulo texto="Discografía" />
      <div className={styles.contenedorObras}>
        {obras.map((obra, i) => (
          <div key={i} className={styles.obra}>
            <div className={styles.imagen}>
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
                    height="50"
                    width="50"
                  />
                </a>
              </div>
            </div>
            <div className={styles.texto}>
              <h2>{obra.titulo}</h2>
              <h3>{obra.subtitulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
