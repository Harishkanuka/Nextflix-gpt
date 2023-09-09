import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularSeries } from "../utils/seriesSlice";

const usePopularSeries = () => {
    const dispatch = useDispatch();
    const popularSeries = useSelector((store) => store.series.popularSeries);
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
        !popularSeries && getPopularSeries();
    }, []);
};

export default usePopularSeries;
