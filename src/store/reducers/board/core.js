'use strict';

import {Record, List} from 'immutable';
import {board} from './model';

export const InitialState = Record({
  board: board
});
