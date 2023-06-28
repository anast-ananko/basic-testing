import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 5, b: 2, action: Action.Add, expected: 7 },
  { a: 3, b: 5, action: Action.Add, expected: 8 },

  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: 4, b: 4, action: Action.Subtract, expected: 0 },
  { a: 9, b: 3, action: Action.Subtract, expected: 6 },

  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 4, b: 5, action: Action.Multiply, expected: 20 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },

  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 12, b: 4, action: Action.Divide, expected: 3 },
  { a: 5, b: 0, action: Action.Divide, expected: Infinity },

  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
  { a: 0, b: 5, action: Action.Exponentiate, expected: 0 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return the correct result $expected for action "$action" with operands $a and $b',
    ({ a, b, action, expected }) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );
});
