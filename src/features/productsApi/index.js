import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export default productsApi;
export const { useGetProductQuery } = productsApi;
