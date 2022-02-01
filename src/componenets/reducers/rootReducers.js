import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';

export const rootReducers = combineReducers({
  game: gameReducer,
})