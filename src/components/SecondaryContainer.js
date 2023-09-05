import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const series = useSelector((store) => store.series);
    return (
        movies &&
        series && (
            <div className="bg-black ">
                <div className="-mt-48 relative z-20 ">
                    <MovieList
                        title={"Now Playing🍿"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Upcoming Movies☄️"}
                        movies={movies.upcomingMovies}
                    />
                    <MovieList
                        title={"Top Rated❤️‍🔥"}
                        movies={movies.topRatedMovies}
                    />
                    <MovieList
                        title={"Popular🎬"}
                        movies={movies.popularMovies}
                    />
                    <h1 className="text-white text-center font-bold text-3xl pt-3 ">
                        TV Series📺
                    </h1>
                    <MovieList
                        title={"Airing Today✈️"}
                        movies={series.airingToday}
                    />
                    <MovieList
                        title={"Popular Series🔥"}
                        movies={series.popularSeries}
                    />
                    <MovieList
                        title={"Top Rated✨"}
                        movies={series.topRatedSeries}
                    />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;
