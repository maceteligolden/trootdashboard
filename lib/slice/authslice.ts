import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getFromLocalStorage } from "utils/localstorage";

export interface User {
  firstname: string,
  id: string,
  email: string,
  role: string
}

const defaultUser: User = {
  firstname: '',
  id: '',
  email: '',
  role: ''
}

interface AuthState {
  user: User ;
  token: string | '';
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: getFromLocalStorage("token") ? getFromLocalStorage("token") : '',
    user: getFromLocalStorage("user") ? JSON.parse(getFromLocalStorage("user") ?? JSON.stringify(defaultUser)) : defaultUser
  } as AuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut: (state, action) => {
      state.token = '';
      state.user = defaultUser;
    }
  },
});

export const { setCredentials, logOut } = slice.actions;
export default slice.reducer;
export const selectCurrentUser: any = (state: RootState) => { return state.auth.user };
export const selectCurrentToken: any = (state: RootState) => { return state.auth.token };
