import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-lg md:text-5xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 w-1/3 font-medium">
                {overview}
            </p>
            <div>
                <button className="bg-white py-1 px-2 mt-2 md:py-4 md:px-8 text-black text-xl rounded-lg font-bold hover:bg-opacity-70">
                    ▶Play
                </button>
                <button className="hidden md:inline-block mx-3 bg-zinc-500 p-4 px-8 text-white text-xl rounded-lg font-bold hover:bg-opacity-70">
                    ℹ️ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
