import styles from "./Carrusel.module.css"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed } from "semantic-ui-react"

const videos = [
  { id: "Xgx9pg9h9Fc", img: "/static/img/audiovisuales-limbo.webp" },
  { id: "hNx78lOYRvg", img: "/static/img/audiovisuales-casita.webp" },
]

export default function Carrusel() {
  const [videoActivo, setVideoActivo] = useState(0)
  return (
    <div className={styles.carrusel}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={{
          device: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
          },
        }}
        afterChange={(previousSlide, _ref) => {
          let currentSlide = _ref.currentSlide
          _ref.onMove
          return setVideoActivo(currentSlide)
        }}
      >
        {videos.map((video, i) => {
          return (
            videoActivo == i ? (
              <Embed
                key={video.id}
                hd={false}
                id={video.id}
                source="youtube"
                autoplay={true}
                placeholder={video.img}
                iframe={{
                  allowFullScreen: true,
                  allow: "autoplay",
                }}
              />
            ) : (
              <Embed key={video.id} active={false} placeholder={video.img} />
            )
          )
        })}
      </Carousel>
    </div>
  )
}
