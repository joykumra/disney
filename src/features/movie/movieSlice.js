import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommends: "",
  newDisney: "",
  originals: "",
  trending: "",
};

const movieSlice = createSlice({
  name: "Movie",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommends = action.payload.recommends;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
