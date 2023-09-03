import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
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
                        photoURL: USER_AVATAR,
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
                    src={BG_IMG}
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
