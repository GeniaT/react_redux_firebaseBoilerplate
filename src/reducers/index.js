import { combineReducers } from 'redux';
import reducerName1 from '../ducks/duck1/reducers';
import reducerName2 from '../ducks/duck2/reducers';
import reducerName3 from '../ducks/duck3/reducers';

export const appReducer = combineReducers({
  reducerName1,
  reducerName2,
  reducerName3
});
