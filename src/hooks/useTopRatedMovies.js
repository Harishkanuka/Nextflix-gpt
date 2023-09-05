import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    //Fetch Data from TMDB API and Update the store
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default useTopRatedMovies;
