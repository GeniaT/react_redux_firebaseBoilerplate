import { actionADuck3, actionBDuck3, actionCDuck3 } from './actions';

test('should setup "log in" action object', () => {
  const action = actionADuck3(1,2);
  const result = {type: 'ACTIONADUCK3', a:1, b:2};
  expect(action).toEqual(result);
});
