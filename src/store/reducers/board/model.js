import {List, Record} from 'immutable';

const N = 11;

export const board = Array.apply(null, {length: N}).map((a)=>Array.apply(null, {length: N}).map((o)=>'rgba(255, 255, 255, 1)'))
