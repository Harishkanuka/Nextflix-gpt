import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };

    const handleGptSearchClick = async () => {
        // Make an API call to GPT API and get Movie Results

        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-3.5-turbo",
        });

        if (!gptResults.choices) {
            // TODO: Write Error Handling
        }

        console.log(gptResults.choices?.[0]?.message?.content);

        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

        // For each movie I will search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);

        dispatch(
            addGptMovieResults({
                movieNames: gptMovies,
                movieResults: tmdbResults,
            })
        );
    };
    return (
        <div className="pt-[8%] flex justify-center">
            <form
                className=" bg-transparent bg-gradient-to-r from-black w-1/2 grid grid-cols-12 "
                onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    onClick={handleGptSearchClick}
                    className="text-black p-3 m-4 rounded-full col-span-9 font-semibold "
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className="bg-pink-400 bg-opacity-75 text-black font-semibold py- m-4 rounded-full col-span-3">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
