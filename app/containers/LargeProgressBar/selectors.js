import { createSelector } from 'reselect';

/**
 * Direct selector to the largeProgressBar state domain
 */
const selectLargeProgressBarDomain = () => (state) => state.get('largeProgressBar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LargeProgressBar
 */

const selectTitle = () => createSelector(
  selectLargeProgressBarDomain(),
  (substate) => substate.get('title')
);
const selectMin = () => createSelector(
  selectLargeProgressBarDomain(),
  (substate) => substate.get('min')
);
const selectMax = () => createSelector(
  selectLargeProgressBarDomain(),
  (substate) => substate.get('max')
);
const selectCurrent = () => createSelector(
  selectLargeProgressBarDomain(),
  (substate) => substate.get('current')
);

export {
  selectLargeProgressBarDomain,
  selectTitle,
  selectMin,
  selectMax,
  selectCurrent,
};
