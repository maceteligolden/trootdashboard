import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Type {
  id: string;
  name: string
}

const defaultType: Type = {
  id: "",
  name: ""
}

interface TypeState {
  types: Type[] ;
};

const slice = createSlice({
  name: "type",
  initialState: {
    types: []
  } as TypeState,
  reducers: {
    setTypes: (state, action: PayloadAction<TypeState>) => {
      state.types = action.payload.types
    },
  },
});

export const { setTypes } = slice.actions;
export default slice.reducer;
export const fetchAllTypes: any = (state: RootState) => { return state.type.types };
