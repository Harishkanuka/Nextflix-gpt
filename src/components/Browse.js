import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
    useNowPlayingMovies();
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
