import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src="
                https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
                        class=" inline-block rounded bg-red-700 w-16 h-12  my-3  pb-2 pt-2.5 text-xs font-bold  leading-normal text-white hover:bg-red-500">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
