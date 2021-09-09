import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { Embed } from "semantic-ui-react"

export default function Video({ id, activo }) {
  const [visible, setVisibile] = useState(false)
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visible) {
          setVisibile(true)
        }
        if (!isVisible && visible) {
          setVisibile(false)
        }
      }}
      partialVisibility
    >
      {
      visible && activo ? (
        <Embed
          hd={false}
          id={id}
          source="youtube"
          autoplay={true}
          placeholder="/static/img/discografía.jpg"
        />
      ) : (
        <Embed
          hd={false}
          id={id}
          active={false}
          source="youtube"
          autoplay={true}
          placeholder="/static/img/discografía.jpg"
        />
      )}
    </VisibilitySensor>
  )
}
