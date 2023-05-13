import { styled, Box } from "@mui/material";

export const Circle = styled(Box)(({ size, background }) => ({
  borderRadius: "50%",
  height: size,
  width: size,
  backgroundColor: background,
}));

export const Rectangle = styled(Box)(({ height, width, background }) => ({
  height: height,
  width: width,
  backgroundColor: background,
}));

// const Circle = ({ color, size }) => {};
