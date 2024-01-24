import { trootfindrApi } from "../api";
import ILogin from "./interface/auth.interface";
import IResponse from "./interface/response.interface";

export const authEndpoint = trootfindrApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, ILogin>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authEndpoint;
