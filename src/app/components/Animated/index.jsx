import { AnimateOnChange } from 'react-animation';
import PropTypes from "prop-types";

export default function Animated({ animationIn = "bounceIn", animationOut = "bounceOut", duration = 500, children }) {
  return (
    <AnimateOnChange
      style={{ height: "100%" }}
      animationIn={animationIn}
      animationOut={animationOut}
      durationOut={duration}
    >
      {children}
    </AnimateOnChange>

  )
}

Animated.propTypes = {
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  duration: PropTypes.number,
  children: PropTypes.element,
}