export const pxToRem = (px, decimalPlaces) => {
  // const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${px}px`;
};

export const Typography = {
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    fontFamily: "Jost, sans-serif;",
    lineHeight: pxToRem(77),
    '@media (max-width:600px)': {
      fontSize: '32px',
    },
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(32),
    fontFamily: "Jost, sans-serif;",
    lineHeight: pxToRem(38),
    '@media (max-width:600px)': {
      fontSize: '16px',
    },
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(22),
    fontFamily: "Jost, sans-serif;",
    lineHeight: pxToRem(26),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  h4Small: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    fontFamily: "Jost, sans-serif;",
    lineHeight: pxToRem(22),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  h4ExtraSmall: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    fontFamily: "Jost, sans-serif;",
    lineHeight: pxToRem(22),
  },
  h1Anagata: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    fontFamily: "Roboto",
    lineHeight: pxToRem(77),
    '@media (max-width:600px)': {
      fontSize: '32px',
      lineHeight: pxToRem(60),
    },
  },
  anagataRegulerLarge: {
    fontWeight: 400,
    fontSize: pxToRem(22),
    fontFamily: "Roboto",
    lineHeight: pxToRem(26),
    '@media (max-width:600px)': {
      fontSize: '16px',
    },
  },
  anagataLightLarge: {
    fontWeight: 300,
    fontSize: pxToRem(22),
    fontFamily: "Roboto",
    lineHeight: pxToRem(26),
    '@media (max-width:600px)': {
      fontSize: '16px',
    },
  },
  anagataRegulerMedium: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    fontFamily: "Roboto",
    lineHeight: pxToRem(27),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  anagataLightMedium: {
    fontWeight: 300,
    fontSize: pxToRem(18),
    fontFamily: "Roboto",
    lineHeight: pxToRem(22),
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
  anagataRegulerSmall: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    fontFamily: "Roboto",
    lineHeight: pxToRem(22),
    '@media (max-width:600px)': {
      fontSize: '12px',
    },
  },
  anagataLightSmall: {
    fontWeight: 300,
    fontSize: pxToRem(16),
    fontFamily: "Roboto",
    lineHeight: pxToRem(22),
    '@media (max-width:600px)': {
      fontSize: '12px',
    },
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
