export const ColorPalette = {
  black: {
    50: "#070707",
    100: "#1C1C1C",
    200: "#1E1E1E"
  },
  gray: {
    50: "#CCCCCC",
    100: "#666666"
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
  blue: {
    100: "#2F3948"
  }
};

export const MuiColorPalette = {
  primary: {
    main: "#2BB8AB",
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
