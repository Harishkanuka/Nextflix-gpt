import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInFrom] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInForm);
    };

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background IMG"
                />
            </div>

            <form className="absolute p-12 bg-black  w-1/3 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-zinc-800 rounded-lg opacity-90 font-semibold"
                    />
                )}

                <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="p-4 my-4 w-full bg-zinc-800 rounded-lg opacity-90 font-semibold"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full  bg-zinc-800 rounded-lg opacity-90 font-semibold"
                />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg font-semibold">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="py-4 cursor-pointer"
                    onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already registered? Sign In Now.."}
                </p>
            </form>
        </>
    );
};

export default Login;
