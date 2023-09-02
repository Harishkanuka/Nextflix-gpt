import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const dipatch = useDispatch();
    //State variable for Error message
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInFrom] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        //If there is an error return
        if (message) return;

        if (!isSignInForm) {
            //Sign up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ8NBJb8kWNV6Su2iSpMvvz7_YnnEWnmJ2g&usqp=CAU",
                    })
                        .then(() => {
                            // Profile updated!
                            // dipatch new data from auth
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dipatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            // once data is updated then navigate
                            navigate("/browse");
                        })
                        .catch((error) => {
                            // An error occurred
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage);
                });
        } else {
            //Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage);
                });
        }
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

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute p-12 bg-black  w-1/3 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-zinc-800 rounded-lg opacity-90 font-semibold"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email"
                    className="p-4 my-4 w-full bg-zinc-800 rounded-lg opacity-90 font-semibold"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full  bg-zinc-800 rounded-lg opacity-90 font-semibold"
                />
                <p className="text-red-600 font-bold">{errorMessage}</p>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg font-semibold"
                    onClick={handleButtonClick}>
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
