import { Box, styled } from "@mui/material";

export const FadeUpContainer = styled(Box)(({ theme }) => ({
  "&.isActive" : {
    opacity: 1,
    transform: "none",
    visibility: "visible",
    transition: "opacity 0.5s ease-in, transform 0.8s ease-in",
  },
  "&.notActive": {
    opacity: 0,
    transform: 'translateY(50px)',
    visibility: "hidden",
    transition: "opacity 0.5s ease-out, transform 0.8s ease-out",
    willChange:" opacity, visibility",
  }
}))