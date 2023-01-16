export const pxToRem = (px, decimalPlaces) => {
  // const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${px}px`;
};

export const Typography = {
  nominal: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(77),
    '@media (max-width:600px)': {
      fontSize: '32px',
    },
  },
  headingLarge: {
    fontWeight: 600,
    fontSize: pxToRem(48),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(58),
    '@media (max-width:600px)': {
      fontSize: '16px',
    },
  },
  headingBig: {
    fontWeight: 600,
    fontWeightMedium: 500,
    fontSize: pxToRem(32),

    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(39),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  headingMedium: {
    fontWeight: "600",
    fontSize: pxToRem(24),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(29),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  headingSmall: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(22),
  },
  subheadingLarge: {
    fontWeight: "500",
    fontSize: pxToRem(24),
    fontFamily: "Montserrat, sans-serif",
    lineHeight: pxToRem(29),
  },
  subheadingMedium: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(22),
  },
  subheadingSmall: {
    fontWeight: 500,
    fontSize: pxToRem(14),
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: pxToRem(17),
  },
  bodyLarge: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(22),
  },
  bodyMedium: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(17),
  },
  bodySmall: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(15),
  },
  captionBig: {
    fontWeight: 500,
    fontSize: pxToRem(12),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(15),
  },
  captionSmall: {
    fontWeight: 500,
    fontSize: pxToRem(10),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(12),
  },
  button: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(24),
  },
  buttonSmall: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  captionSemiBold: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  captionRegular: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(18),
  },
  overline: {
    fontWeight: 700,
    fontSize: pxToRem(10),
    lineHeight: pxToRem(14),
  },
};
