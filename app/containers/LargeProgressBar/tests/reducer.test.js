import expect from 'expect';
import largeProgressBarReducer from '../reducer';
import { fromJS } from 'immutable';

describe('largeProgressBarReducer', () => {
  it('returns the initial state', () => {
    expect(largeProgressBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
