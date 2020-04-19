import React from "react";

import ErrorPageSection from "./errorPageSection";

import FrontPageSection from "./frontPageSection";

import RecipePageSection from "./recipePageSection";

import SignInPageSection from "./signInPageSection";

import SignUpPageSection from "./signUpPageSection";

import {
    Route,
    Switch
}
from "react-router-dom"



type PageType = {
    exact?: boolean;
    path: string;
    component: React.FC<any>
}

const pages: Array<PageType> = [
    {
        exact: true,
        path: "/",
        component: FrontPageSection
    },
    {
        exact: true,
        path: "/recipes/:id",
        component: RecipePageSection
    },
    {
        exact: true,
        path: "/auth/sign-up",
        component: SignUpPageSection
    },
    {
        exact: true,
        path: "/auth/sign-in",
        component: SignInPageSection
    },
    {
        path: "/",
        component: ErrorPageSection
    }
];



export default () => {
    return (
        <Switch>
            {pages.map((route: PageType, index: number) => (
                <Route 
                {...route}
                key={index}/>
            ))}
        </Switch>
    )
}