import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: headers => {
    // here you can set your custom headers
    return headers;
  },
});

export const api = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
