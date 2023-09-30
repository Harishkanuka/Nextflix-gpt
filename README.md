## Netflix GPT App

# Overview

This React application combines cutting-edge technology with user-friendly features to create a Netflix-style app with AI-powered GPT search. Below, we outline the key features and tools used in the development of this project.

## Features

# User Authentication

-   # Sign Up and Sign In Forms
-   Developed user-friendly forms for account creation and sign-in.
-   Implemented form validation to ensure data integrity.
-   # Firebase Integration
-   Configured Firebase for user authentication and data management.
    Created user accounts securely using Firebase services.
-   # User Profile Management

-   Added functionality for users to update their profiles.
-   Resolved issues related to user display names and profile picture updates.
-   # Authentication Handling

-   Implemented user redirection based on authentication status.
-   Ensured non-logged-in users are redirected to the login page, and vice-versa.
-   # Unsubscription to onAuthStateChanged Callback

-   Properly managed Firebase's onAuthStateChanged callback for performance optimization.
-   # Hardcoded Constants

-   Introduced hardcoded constants to centralize app configurations.

## Data Integration

-   # TMDB API Integration

-   Registered for TMDB API, created an app, and obtained an access token.
-   Fetched data from TMDB's now playing movies list API.
-   # Custom Hooks

-   Developed custom hooks for various app functionalities.
-   Created a custom hook for handling now playing movies data.

-   # MovieSlice and Redux Store

-   Utilized Redux to manage the app's state.
-   Created a MovieSlice and updated the store with movie data.

-   # Trailer Video Integration

-   Fetched trailer videos for an enhanced user experience.
-   Embedded YouTube videos with autoplay and mute features.

# UI/UX Enhancement

-   # TailwindCSS Styling

-   Configured and applied TailwindCSS for visually appealing UI.
-   # Responsive Design

-   Ensured the app's responsiveness on various devices.
-   # Main and Secondary Containers

-   Planned and created main and secondary containers for content display.
-   # Movie List and Movie Card

Designed and implemented components for displaying movie lists and cards.

-   # TMDB Image URL

Utilized TMDB image URLs for displaying movie posters and images.

-   # Browse Page Styling

-   Made the Browse page visually attractive using TailwindCSS.
-   # Multi-Language Support

-   Implemented multi-language support for a broader user base.

# GPT Search

-   # GPT Search Page and Search Bar

-   Integrated OpenAI's GPT for advanced search functionality.
-   Implemented a search page and user-friendly search bar.
-   # OpenAI API Integration

-   Obtained the OpenAI API key for GPT integration.
-   Configured API calls to fetch GPT-powered movie suggestions.
-   # GPT Data Management

-   Created a GPT slice to manage GPT-powered data.
-   Reused the MovieList component to build the movie suggestions container.
-   Implemented memoization to optimize API calls.

# Tools Used

-   # Create React App

-   Set up the project using Create React App.
-   # TailwindCSS

-   Configured and applied TailwindCSS for efficient styling.
-   # Firebase

-   Integrated Firebase for user authentication and data storage.
-   # Redux Tool Kit and React-Redux

-   Managed state using Redux and React-Redux for enhanced data flow.
-   # TMDB API

-   Registered, created an app, and obtained an access token for TMDB API integration.
-   # OpenAI GPT

-   Integrated OpenAI's GPT for advanced search capabilities.
-   # dotenv

-   Used dotenv for secure environment variable management.

# Deployment

-   # Deploying App to Production
-   Deployed the app to a production environment for public access.

# Planning:

-   Login/Sign Up
    -   Sign In/ Sign Up Forms
    -   Redirect to browse page (If not logged in)
-   Browse (After authentication)
    -   Header
    -   Main Movie
        -   Trailer in th background
        -   Title and Description
    -   Movie Suggestions
        -   Movielist \* N
