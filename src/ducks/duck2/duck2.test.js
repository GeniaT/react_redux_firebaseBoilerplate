import { actionADuck2, actionBDuck2, actionCDuck2 } from './actions';

test('should setup "log in" action object', () => {
  const action = actionADuck2(1,2);
  const result = {type: 'ACTIONADUCK2', a:1, b:2};
  expect(action).toEqual(result);
});
