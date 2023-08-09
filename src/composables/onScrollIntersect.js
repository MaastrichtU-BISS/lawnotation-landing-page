import { onIntersect } from "./onIntersect";

export const onScrollIntersect = (elementToWatch, onEnter, threshold = 0.8) => {

  return onIntersect(elementToWatch, onEnter, null, false, {
    threshold,
  });
};
