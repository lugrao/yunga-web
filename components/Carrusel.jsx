import styles from "./Carrusel.module.css"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed } from "semantic-ui-react"
import Image from "next/image"
import React from "react"

const videos = [
  {
    titulo: "Casita",
    id: "hNx78lOYRvg",
    img: "/static/img/audiovisuales-casita.webp",
    thumbnail: "/static/img/audiovisuales-casita-thumbnail.webp",
  },
  {
    titulo: "Limbo",
    id: "Xgx9pg9h9Fc",
    img: "/static/img/audiovisuales-limbo.webp",
    thumbnail: "/static/img/audiovisuales-limbo-thumbnail.webp",
  },
]

const CustomDot = ({ onClick, ...rest }) => {
  const {
    // onMove,
    index,
    active,
    // carouselState: { currentSlide, deviceType },
  } = rest

  const thumbnails = videos.map((video) => (
    <Image src={video.thumbnail} height={50} width={90} />
  ))
  return (
    <div
      className={`${styles.thumbnail} ${!active && styles.thumbnailMascara}`}
    >
      <button
        className={`${styles.thumbnail} ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
      >
        {React.Children.toArray(thumbnails)[index]}
      </button>
    </div>
  )
}

export default function Carrusel() {
  const [videoActivo, setVideoActivo] = useState(0)
  return (
    <div className={styles.carrusel}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots
        customDot={<CustomDot />}
        renderDotsOutside
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
          return videoActivo == i ? (
            <Embed
              className={styles.embed}
              icon=""
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
            <Embed
              icon=""
              key={video.id}
              active={false}
              placeholder={video.img}
            />
          )
        })}
      </Carousel>
    </div>
  )
}
