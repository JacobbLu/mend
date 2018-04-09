'use strict';

import {Record, List} from 'immutable';
import {
  gallery,
} from './model';

export const InitialState = Record({
  gallery: gallery
});
