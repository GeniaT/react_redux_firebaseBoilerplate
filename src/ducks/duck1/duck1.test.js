import { actionADuck1, actionBDuck1, actionCDuck1 } from './actions';

test('should setup "log in" action object', () => {
  const action = actionADuck1(1,2);
  const result = {type: 'ACTIONADUCK1', a:1, b:2};
  expect(action).toEqual(result);
});

test('should setup "log in" action object', () => {
  const action = actionBDuck1(3);
  const result = {type: 'ACTIONBDUCK1', a: 3};
  expect(action).toEqual(result);
});

test('should setup "log in" action object', () => {
  const action = actionCDuck1(3);
  const result = {type: 'ACTIONCDUCK1', a: 3};
  expect(action).toEqual(result);
});
