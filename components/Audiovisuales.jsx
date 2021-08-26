import styles from "./Audiovisuales.module.css";
import Titulo from "./Titulo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const videos = [
  { src: "https://www.youtube.com/embed/Xgx9pg9h9Fc" },
  { src: "https://www.youtube.com/embed/hNx78lOYRvg" },
];

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
  border: "none",
  // color: "white",
  backgroundColor: "black",
  fontSize: "20px",
  // ":hover": {
  //   color: "red",
  //   backgroundColor: "white",
  // },
};

export default function Audiovisuales() {
  return (
    <section id="audiovisuales" className={styles.contenedor}>
      <Titulo texto="Audiovisuales" />
      <Carousel
        showStatus={false}
        className={styles.carrusel}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              className={styles.boton}
              onClick={onClickHandler}
              title={label}
              style={{ left: 5 }}
            >
              ◄
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              className={styles.boton}
              onClick={onClickHandler}
              title={label}
              style={{ right: 5 }}
            >
              ►
            </button>
          )
        }
      >
        {videos.map((video) => {
          return (
            <div>
              <iframe
                width="1270"
                height="480"
                src={video.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
