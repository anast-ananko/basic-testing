import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'Hello, world!';
    const result = await resolveValue(value);
    expect(result).toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMessage = 'Something went wrong!';
    expect(() => throwError(errorMessage)).toThrowError(errorMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultErrorMessage = 'Oops!';
    expect(() => throwError()).toThrowError(defaultErrorMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});
