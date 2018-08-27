import { combineReducers } from 'redux';


export const actionADuck1 = (a, b) => ({
  type: 'ACTIONADUCK1',
  a,
  b
})

export const actionBDuck1 = (a) => ({
  type: 'ACTIONBDUCK1',
  a
})

export const actionCDuck1 = (a) => ({
  type: 'ACTIONCDUCK1',
  a
})

const initialState = [];

export default function reducerName1(state = initialState, action) {
  switch (action.type) {
    case 'ACTIONADUCK1':
      return state;
      break;
    case 'ACTIONBDUCK1':
      return state;
      break;
    case 'ACTIONCDUCK1':
      return state;
      break;
    default:
      return state
  }
}

export const appReducer = combineReducers({
  reducerName1,
});
