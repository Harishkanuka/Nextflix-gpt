export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMG =
    "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ8NBJb8kWNV6Su2iSpMvvz7_YnnEWnmJ2g&usqp=CAU";

console.log("TMDB API " + process.env.REACT_APP_TMDB_KEY);
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
