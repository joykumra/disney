import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setSignOut(state, action) {
      state.name = null;
      state.email = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
