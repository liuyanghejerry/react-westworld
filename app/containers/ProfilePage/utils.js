import { random } from 'lodash';

function genLiveStatusLineData(xMax, xInterval, yMax) {
  return Array.from({ length: xMax }).map((_, i) => [i * xInterval, random(0, yMax)]);
}

export {
  genLiveStatusLineData,
};
