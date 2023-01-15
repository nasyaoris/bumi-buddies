import { Box } from "@mui/material"
import PropTypes from "prop-types";
import { animations } from 'react-animation'

export default function Animation({ children, style }) {
  return (
    <Box
      style={{ ...style, animation: animations.fadeInUp, animationDuration: 2000}}
    >
      {children}
    </Box>

  )
}
