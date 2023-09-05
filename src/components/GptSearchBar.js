import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    return (
        <div className="pt-[8%] flex justify-center">
            <form
                className=" bg-transparent bg-gradient-to-r from-black w-1/2 grid grid-cols-12 "
                onSubmit={(e) => e.preventDefault()}>
                <input
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
