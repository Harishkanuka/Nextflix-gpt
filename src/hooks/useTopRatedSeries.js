import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedSeries } from "../utils/seriesSlice";

const useTopRatedSeries = () => {
    const dispatch = useDispatch();
    const topRatedSeries = useSelector((store) => store.series.topRatedSeries);
    //Fetch Data from TMDB API and Update the store
    const getTopRatedSeries = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/top_rated",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedSeries(json.results));
    };
    useEffect(() => {
        !topRatedSeries && getTopRatedSeries();
    }, []);
};

export default useTopRatedSeries;
