export const pxToRem = (px, decimalPlaces) => {
  // const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${px}px`;
};

export const Typography = {
  nominal: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(77),
    "@media (max-width:700px)": {
      lineHeight: pxToRem(24),
      fontSize: "32px",
    },
  },
  headingLarge: {
    fontWeight: 900,
    fontSize: pxToRem(48),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(58),
    "@media (max-width:600px)": {
      fontSize: "24px",
    },
  },
  headingBig: {
    fontWeight: 600,
    fontWeightMedium: 500,
    fontSize: pxToRem(32),

    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(39),
    "@media (max-width:600px)": {
      fontSize: "18px",
    },
  },
  headingThin: {
    fontWeight: 400,
    fontWeightMedium: 500,
    fontSize: pxToRem(32),

    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(39),
    "@media (max-width:600px)": {
      fontSize: "18px",
    },
  },
  headingMedium: {
    fontWeight: "600",
    fontSize: pxToRem(24),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(29),
    "@media (max-width:600px)": {
      fontSize: "14px",
    },
  },
  headingSmall: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(22),
  },
  subheadingLarge: {
    fontWeight: "500",
    fontSize: pxToRem(24),
    fontFamily: "Hind, sans-serif",
    lineHeight: pxToRem(29),
  },
  subheadingLargeThin: {
    fontWeight: "400",
    fontSize: pxToRem(24),
    fontFamily: "Hind, sans-serif",
    lineHeight: pxToRem(29),
  },
  subheadingMedium: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    fontFamily: "'Hind', sans-serif",
    lineHeight: pxToRem(22),
  },
  subheadingSmall: {
    fontWeight: 500,
    fontSize: pxToRem(14),
    fontFamily: "'Hind', sans-serif",
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
  sectionTitle: {
    fontWeight: 500,
    fontSize: pxToRem(48),
    fontFamily: "'Bakso Sapi', sans-serif",
    lineHeight: pxToRem(58),
    "@media (max-width:600px)": {
      fontSize: "32px",
    },
  },
  titleMedium: {
    fontWeight: 500,
    fontSize: pxToRem(32),
    fontFamily: "'Bakso Sapi', sans-serif",
    lineHeight: pxToRem(38),
  },
  titleSmall: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    fontFamily: "'Bakso Sapi', sans-serif",
    lineHeight: pxToRem(22),
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
  cardTitle: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: "normal",
  },
  cardSubheading: {
    fontWeight: 500,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(15),
  },
  cardBody: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: "normal",
  }
};
