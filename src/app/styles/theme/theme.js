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

const {
  breakpoints,
  typography: { pxToRem },
} = baseTheme;

const theme = createTheme(baseTheme, {
  overrides: {
    MuiTypography: {
      h1: {
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Montserrat";
          src: url('/fonts/Montserrat-SemiBold.ttf');
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }
        @font-face {
          font-family: "Montserrat";
          src: url('/fonts/Montserrat-Bold.ttf');
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: "Hind";
          src: url('/fonts/Hind-Regular.ttf');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Hind";
          src: url('/fonts/Hind-Medium.ttf');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Hind";
          src: url('/fonts/Hind-SemiBold.ttf');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Bakso Sapi";
          src: url('/fonts/BaksoSapi.otf');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiTypography: {
      h1: {
        [breakpoints.down("md")]: {
          fontSize: "3rem",
        },
      },
    },
  },
});

export default theme;
