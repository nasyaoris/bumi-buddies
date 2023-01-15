import { styled, Typography } from "@mui/material";

const shouldForwardProp = (propName) =>
  !propName.startsWith("_ana");


export const CustomizedTypography = styled(Typography, {
  shouldForwardProp,
})(({ _anaUnderline, _anaUppercase }) => ({
  textDecoration: _anaUnderline ? "underline" : "none",
  textTransform: _anaUppercase ? "uppercase" : "none",
}));
