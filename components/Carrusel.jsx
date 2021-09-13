import styles from "./Carrusel.module.css"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed } from "semantic-ui-react"
import Image from "next/image"
import React from "react"

const videos = [
  { id: "Xgx9pg9h9Fc", img: "/static/img/audiovisuales-limbo.webp" },
  { id: "hNx78lOYRvg", img: "/static/img/audiovisuales-casita.webp" },
]

const CustomDot = ({ onClick, ...rest }) => {
  const {
    // onMove,
    index,
    active,
    // carouselState: { currentSlide, deviceType },
  } = rest

  const thumbnails = videos.map((video, i) => (
    <Image src={video.img} height={50} width={90} />
  ))
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <div
      className={`${styles.thumbnail} ${!active && styles.thumbnailMascara}`}
      // style={{
      //   height: 50,
      //   width: 90,
      //   backgroundColor: "black",
      //   opacity: active ? 1 : 0.5,
      //   padding: 0,
      //   margin: "0 3px",
      //   border: "none",
      // }}
    >
      <button
        className={`${styles.thumbnail} ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
        // style={{
        //   height: 50,
        //   width: 90,
        //   border: "none",
        //   padding: 0,
        //   margin: "0 3px",
        // }}
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
        // renderButtonGroupOutside
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
        })}
      </Carousel>
    </div>
  )
}
