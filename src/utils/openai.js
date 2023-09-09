import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});

export default openai;

// // R = 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
// // REACT_APP_TMDB_KEY = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI4NjMzZWRiZTEyOWQzODNlZWU5YzY3Y2UyYjFmMyIsInN1YiI6IjY0ZjQwMjM0M2Q0M2UwMDBjNGE4YzJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYkMCbIeHJHG6EwXnbiYIUxYlrPkFrAjlZMY8DmwUtQ
