const LAYOUT_BREAK_POINT = {
  MOBILE: 450,
  PAD: 1000,
  MAC: 1440,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const mediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  pad: createMediaQuery(LAYOUT_BREAK_POINT.PAD),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};
