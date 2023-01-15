export const ColorPalette = {
  black: {
    50: "#070707",
    100: "#1C1C1C",
  },
  gray: {
    50: "#DADADA",
    100: "#D4CFCF"
  },
  white: {
    50: "#FAFAFA",
    100: "#FFFFFF"
  },
  orange: {
    50: "#FFE1DA",
    100: "#FE623E",
    200: "#FD3103",
    300: "#EF602C"
  },
};

export const MuiColorPalette = {
  primary: {
    main: ColorPalette.orange[200],
    gray: ColorPalette.gray[100],
    orange: ColorPalette.orange[200],
    black: ColorPalette.black[100],
    lightGray: ColorPalette.gray[50]
  },
  secondary: {
    main: ColorPalette.orange[50],
    orange: ColorPalette.orange[50],
    white: ColorPalette.white[50],
    black: ColorPalette.black[50]
  },
  optional: {
    main: ColorPalette.orange[100],
    orange: ColorPalette.orange[100],
  },
};
