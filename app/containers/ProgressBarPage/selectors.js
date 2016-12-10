import { createSelector } from 'reselect';

/**
 * Direct selector to the progressBarPage state domain
 */
const selectProgressBarPageDomain = () => (state) => state.get('progressBarPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProgressBarPage
 */

const selectLargeTitle = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['largeProgressBar', 'title'])
);
const selectLargeMin = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['largeProgressBar', 'min'])
);
const selectLargeMax = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['largeProgressBar', 'max'])
);
const selectLargeCurrent = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['largeProgressBar', 'current'])
);


const selectSmallTitle = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['smallProgressBar', 'title'])
);
const selectSmallMin = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['smallProgressBar', 'min'])
);
const selectSmallMax = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['smallProgressBar', 'max'])
);
const selectSmallCurrent = () => createSelector(
  selectProgressBarPageDomain(),
  (substate) => substate.getIn(['smallProgressBar', 'current'])
);

export {
  selectProgressBarPageDomain,
  selectLargeTitle,
  selectLargeMin,
  selectLargeMax,
  selectLargeCurrent,

  selectSmallTitle,
  selectSmallMin,
  selectSmallMax,
  selectSmallCurrent,
};
