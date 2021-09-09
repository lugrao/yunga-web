import styles from "./Carrusel.module.css"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import Video from "./Video"

const responsive = {
  doesntmatter: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
}

const videos = [{ id: "Xgx9pg9h9Fc" }, { id: "hNx78lOYRvg" }]

export default function WithVideo() {
  const [videoActivo, setVideoActivo] = useState(0)
  console.log(videoActivo)

  return (
    <div className={styles.carrusel}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        afterChange={function (previousSlide, _ref) {
          var currentSlide = _ref.currentSlide
          _ref.onMove
          return setVideoActivo(currentSlide)
        }}
      >
        {videos.map((video, i) => {
          return (
            <Video id={video.id} activo={videoActivo == i} key={video.id} />
          )
        })}
      </Carousel>
    </div>
  )
}
