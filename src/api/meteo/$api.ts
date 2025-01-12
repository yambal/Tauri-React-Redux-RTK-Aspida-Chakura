import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1xmin9h } from './v1/forecast';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.open-meteo.com' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/forecast';
  const GET = 'GET';

  return {
    v1: {
      forecast: {
        get: (option: { query: Methods_1xmin9h['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xmin9h['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option: { query: Methods_1xmin9h['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1xmin9h['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1xmin9h['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
