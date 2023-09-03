import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { nowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
