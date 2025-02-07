
import { api } from '../apiSlice'

export const userApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.mutation({
      query: (body) => ({
        url: '/test/test',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useTestMutation } = userApiSlice;