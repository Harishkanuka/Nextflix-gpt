import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 w-1/3 font-medium">{overview}</p>
            <div>
                <button className="bg-white p-4 px-8 text-black text-xl rounded-lg font-bold hover:bg-opacity-70">
                    ▶Play
                </button>
                <button className=" mx-3 bg-zinc-500 p-4 px-8 text-white text-xl rounded-lg font-bold hover:bg-opacity-70">
                    ℹ️ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
