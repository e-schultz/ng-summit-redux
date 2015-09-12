import R from 'ramda';
import Immutable from 'immutable';
import { createSelector, createSelectorCreator } from 'reselect';

const immutableCreateSelector = createSelectorCreator(Immutable.is);

