import ErrorPageSection from "./errorPageSection";

import FrontPageSection from "./frontPageSection";

import RecipePageSection from "./recipePageSection";

import SignInPageSection from "./signInPageSection";

import SignUpPageSection from "./signUpPageSection";

import {
    IPage
} 
from "../components/pages";


const pages: Array<IPage> = [
    {
        exact: true,
        path: "/",
        component: FrontPageSection
    },
    {
        path: "/recipes",
        pages: [
            {
                exact: true,
                path: "/:id",
                component: RecipePageSection
            }
        ]
    },
    {
        path: "/auth",
        pages: [
            {
                exact: true,
                path: "/sign-up",
                component: SignUpPageSection
            },
            {
                exact: true,
                path: "/sign-in",
                component: SignInPageSection
            }
        ]
    },
    {
        path: "/",
        component: ErrorPageSection
    }
];

export default pages;