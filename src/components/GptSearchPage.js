import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10	">
                <img
                    className="h-screen object-cover"
                    src={BG_IMG}
                    alt="Background IMG"
                />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    );
};

export default GptSearchPage;
