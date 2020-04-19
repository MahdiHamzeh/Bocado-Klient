import React from "react";

import {
    useHistory
}
from "react-router-dom";

import Navbar from "../components/navbar";



const NavbarSection = () => {
    const pages = [
        "home",
        "contact us",
        "about us",
    ];

    const history = useHistory();

    const onSignInHandler = () => {
        history.push("/auth/sign-in");
    };

    const onSignUpHandler = () => {
        history.push("/auth/sign-up");
    };

    const onPageChangeHandler = (page: string) => {
    
        const patternMatching: Record<string, () => (void | any)> = {
            "home": () => history.push("/"),
            "contact us": () => history.push("/contact-us"),
            "about us": () => history.push("/about-use")
        };

        patternMatching[page]();
    };

    return (
        <Navbar 
        isSignedIn={false}
        onSignIn={onSignInHandler}
        onSignUp={onSignUpHandler}
        onPageChange={onPageChangeHandler}
        pages={pages}/>
    );
}


export default NavbarSection;