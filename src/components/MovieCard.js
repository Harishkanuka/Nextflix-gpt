import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer ">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="MovieCard"
            />
        </div>
    );
};

export default MovieCard;
