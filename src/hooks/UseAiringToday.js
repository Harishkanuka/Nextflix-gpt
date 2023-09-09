import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addAriringToday } from "../utils/seriesSlice";

const useAiringToday = () => {
    const dispatch = useDispatch();
    const airingToday = useSelector((store) => store.series.airingToday);
    //Fetch Data from TMDB API and Update the store
    const getAiringToday = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/airing_today",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        dispatch(addAriringToday(json.results));
    };
    useEffect(() => {
        !airingToday && getAiringToday();
    }, []);
};

export default useAiringToday;
