import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import Cookies from "js-cookie";

export interface BaseModel {
  status: number;
  message: string;
}

export const sungloApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/admin/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the state,
      const token: string = Cookies.get("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({}),
});
