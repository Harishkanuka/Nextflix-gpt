import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute -z-10	">
                <img
                    src={BG_IMG}
                    alt="Background IMG"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GptSearchPage;
