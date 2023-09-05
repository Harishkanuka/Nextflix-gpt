import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import seriesReducer from "./seriesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        series: seriesReducer,
    },
});

export default appStore;
