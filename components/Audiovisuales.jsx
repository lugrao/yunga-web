import styles from "./Audiovisuales.module.css"
import Titulo from "./Titulo"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"

const videos = [
  { src: "https://www.youtube.com/embed/Xgx9pg9h9Fc" },
  { src: "https://www.youtube.com/embed/hNx78lOYRvg" },
]

export default function Audiovisuales() {
  return (
    <section id="audiovisuales" className={styles.contenedor}>
      <Image
        src="/static/img/audiovisual.jpg"
        layout="fill"
        objectFit="cover"
      />
      <Titulo texto="Audiovisuales" />
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        className={styles.carrusel}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              className={styles.boton}
              onClick={onClickHandler}
              title="Anterior"
              style={{ left: 5 }}
            >
              <span className="material-icons-two-tone">arrow_back_ios</span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              className={styles.boton}
              onClick={onClickHandler}
              title="Siguiente"
              style={{ right: 5 }}
            >
              <span className="material-icons-two-tone">arrow_forward_ios</span>
            </button>
          )
        }
      >
        {videos.map((video, idx) => {
          return (
            <div key={idx}>
              <iframe
                width="1270"
                height="480"
                src={video.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
