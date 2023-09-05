import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name: "series",
    initialState: {
        airingToday: null,
        popularSeries: null,
        topRatedSeries: null,
    },
    reducers: {
        addAriringToday: (state, action) => {
            state.airingToday = action.payload;
        },
        addPopularSeries: (state, action) => {
            state.popularSeries = action.payload;
        },
        addTopRatedSeries: (state, action) => {
            state.topRatedSeries = action.payload;
        },
    },
});

export const { addAriringToday, addPopularSeries, addTopRatedSeries } =
    seriesSlice.actions;
export default seriesSlice.reducer;
