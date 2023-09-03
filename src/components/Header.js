import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signIn/ SignUp
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // Unsubscribe when the component is unmount
        return () => unsubscribe();
    }, []);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="Netflix_Logo"
            />

            {user && (
                <div className="flex ">
                    <img
                        className="w-12 h-12  m-3 cursor-pointer rounded "
                        src={user?.photoURL}
                        alt="profile_icon"
                    />
                    <button
                        onClick={handleSignOut}
                        type="button"
                        className=" inline-block rounded bg-red-700 w-16 h-12  my-3  pb-2 pt-2.5 text-xs font-bold  leading-normal text-white hover:bg-red-500">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
