import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: 'test data' }),
  create() {
    return {
      get: this.get.mockResolvedValue({ data: 'test data' }),
    };
  },
}));

jest.mock('lodash', () => {
  const originalModule = jest.requireActual<typeof import('lodash')>('lodash');
  return {
    ...originalModule,
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const axiosCreateSpy = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi('/posts');

    expect(axiosCreateSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    await throttledGetDataFromApi('/posts');

    expect(axiosGetSpy).toHaveBeenCalledWith('/posts');
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi('/posts');

    expect(result).toEqual('test data');
  });
});
