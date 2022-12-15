import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '57c58068cfmsh13e55763841c10cp1db282jsne87df226c5c0');
  
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
      getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }), 
    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
  } = shazamCoreApi;