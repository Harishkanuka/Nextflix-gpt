import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className=" px-2 py-3 md:px-10 md:py-3">
            <h1 className=" text-lg md:text-2xl py-2 font-semibold text-white ">
                {title}
            </h1>
            <div className="flex overflow-x-scroll">
                <div className="flex ">
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
