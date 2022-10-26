const LAYOUT_BREAK_POINT = {
  MOBILE: 450,
  MIDDLE: 800,
  PAD: 1000,
  MAC: 1440,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const mediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  middle: createMediaQuery(LAYOUT_BREAK_POINT.MIDDLE),
  pad: createMediaQuery(LAYOUT_BREAK_POINT.PAD),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};
