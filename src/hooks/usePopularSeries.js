import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularSeries } from "../utils/seriesSlice";

const usePopularSeries = () => {
    const dispatch = useDispatch();
    //Fetch Data from TMDB API and Update the store
    const getPopularSeries = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/popular",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularSeries(json.results));
    };
    useEffect(() => {
        getPopularSeries();
    }, []);
};

export default usePopularSeries;
