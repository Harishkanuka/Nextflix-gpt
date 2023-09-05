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
const Browse = () => {
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
            {/* 
             Browse Consist of:-
              -Main Container
                 -Video Background
                 -Video Title

              - Secondary Container
                -MovieList * N
                -Cards * N
            */}
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
