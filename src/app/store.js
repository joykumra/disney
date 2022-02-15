import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import userSlice from "../features/user/userSlice";

export default configureStore({
  reducer: { user: userSlice.reducer, movie: movieSlice.reducer },
});
