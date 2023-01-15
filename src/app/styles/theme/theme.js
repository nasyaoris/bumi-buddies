import { createTheme, responsiveFontSizes } from "@mui/material";
import { ColorPalette, MuiColorPalette } from "./pallete";
import { Typography } from "./typography";
// import FuturaHv from "../../public/fonts/FuturaHeavyBT.ttf";

const baseTheme = createTheme({
  palette: {
    ...MuiColorPalette,
    ...ColorPalette,
  },
  typography: {
    ...Typography,
  },
});

const { breakpoints, typography: { pxToRem } } = baseTheme;

const theme = createTheme(baseTheme, {
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.down("xs")]: {
          fontSize: "3rem"
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: Jost, sans-serif;
          src: url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiTypography: {
      h1: {
        [breakpoints.down("md")]: {
          fontSize: "3rem"
        }
      }
    }
  },
});

export default theme;
