import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringToday from "../hooks/UseAiringToday";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useAiringToday();
    usePopularSeries();
    useTopRatedSeries();
    return (
        <div>
            <Header />
            {showGptSearch ? (
                <GptSearchPage />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    );
};

export default Browse;
