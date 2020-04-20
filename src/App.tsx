import React from 'react';

import {
  BrowserRouter as Router,
} 
from "react-router-dom";

import NavbarSection from "./pages/navbarSection"

import { 
  RecipeWithIngredients
}
from "./components/recipes/";

import pages from "./pages";

import Pages from "./components/pages";

import * as images from "./images";



export interface RecipeWithIngredientsInstructions extends RecipeWithIngredients {
  instructions: Array<string>;
}

export const recipes: Array<RecipeWithIngredientsInstructions> = [
    {
        name: "Biryani",   

        image: images.biryani,

        title: "Biryani",

        description: `This is, as called by my mom, my signature biryani recipe. 
        It's healthy and has half of the calories of a normal take-away so that's a bonus!`,

        time: 60,

        date: new Date(),

        ingredients: [
            {
                type: "milk-yogurt",
                description: "container whole",
                amount: {
                    value: 30,
                    type: "G"
                }
            },
            {
                type: "garlic",
                description: "6 cloves crushed",
                amount: {
                    value: 1,
                    type: "st"
                }
            },
            {
                type: "ginger-root",
                description: "finely grated",
                amount: {
                    value: 0.5,
                    type: "Cl"
                }
            },
            {
                type: "masala",
                description: "garam",
                amount: {
                    value: 0.9,
                    type: "Cl"
                }
            },
            {
                type: "turemic",
                description: "ground",
                amount: {
                    value: 0.3,
                    type: "Cl"
                }
            },
            {
                type: "chicken",
                description: "skinless, boneless",
                amount: {
                    value: 1,
                    type: "Kg"
                }
            },
            {
                type: "rise",
                description: "basmati",
                amount: {
                    value: 1.7,
                    type: "L"
                }
            },
            {
                type: "water",
                amount: {
                    value: 2,
                    type: "L"
                }
            },
            {
                type: "olive-oil",
                amount: {
                    value: 0.07,
                    type: "L"
                }
            },
            {
                type: "onion",
                description: "sliced",
                amount: {
                    value: 3,
                    type: "st"
                }
            },
            {
                type: "tomatoe",
                description: "sliced",
                amount: {
                    value: 3,
                    type: "st"
                }
            }
        ],
        instructions: [
            `Mix yogurt, garlic, ginger, garam masala, turmeric, and salt together in a bowl. 
            Add chicken breast; toss to coat evenly. 
            Cover bowl and marinate chicken in the refrigerator, at least 1 hour.`,

            `Place rice in a bowl and add enough water to cover; set aside to soften. 
            Place saffron threads in a small bowl with 1/4 cup water; set aside to bloom.`,

            `Preheat oven to 400 degrees F (200 degrees C). Coat a baking dish with 2 tablespoons olive oil.`,

            `Arrange onions in the prepared baking dish in a single layer. 
            Top onions with marinated chicken breast, reserving marinade. 
            Add 1/2 cup water to the reserved marinade; 
            pour marinade mixture over chicken. Top with tomato slices.`,

            `Bake in the preheated oven until chicken breasts are 
            no longer pink in the center and the juices run clear, 30 to 35 minutes. 
            An instant-read thermometer inserted into the center 
            should read at least 165 degrees F (74 degrees C).`,

            `Bring 6 cups water to a boil in a large pot with cloves, cardamom, cinnamon, and cumin. 
            Drain rice and add to the pot. Bring to a boil and cook until softened but still firm, about 8 minutes.`,

            `Heat remaining 2 tablespoons oil in a skillet over medium heat. 
            Add masala curry sauce; cook and stir until fragrant, about 1 minute. 
            Add parboiled rice and stir to combine, about 1 minute more. 
            Stir in saffron-infused water and 3/4 cup water. 
            Cover, reduce heat to low, and simmer until liquid is absorbed, 5 to 8 minutes. 
            Remove from heat and let stand until rice is fluffy, 5 to 10 minutes.`,

            `Spoon rice onto serving platter; top with chicken breasts, onion, and tomatoes` 
        ]
    },
    {
        name: "Biryani1",   

        image: images.biryani,

        title: "Biryani 1",

        description: `This is, as called by my mom, my signature biryani recipe. 
        It's healthy and has half of the calories of a normal take-away so that's a bonus!`,

        time: 60,

        date: new Date(),

        ingredients: [
            {
                type: "milk-yogurt",
                description: "container whole",
                amount: {
                    value: 30,
                    type: "G"
                }
            },
            {
                type: "garlic",
                description: "6 cloves crushed",
                amount: {
                    value: 1,
                    type: "st"
                }
            },
            {
                type: "ginger-root",
                description: "finely grated",
                amount: {
                    value: 0.5,
                    type: "Cl"
                }
            },
            {
                type: "masala",
                description: "garam",
                amount: {
                    value: 0.9,
                    type: "Cl"
                }
            },
            {
                type: "turemic",
                description: "ground",
                amount: {
                    value: 0.3,
                    type: "Cl"
                }
            },
            {
                type: "chicken",
                description: "skinless, boneless",
                amount: {
                    value: 1,
                    type: "Kg"
                }
            },
            {
                type: "rise",
                description: "basmati",
                amount: {
                    value: 1.7,
                    type: "L"
                }
            },
            {
                type: "water",
                amount: {
                    value: 2,
                    type: "L"
                }
            },
            {
                type: "olive-oil",
                amount: {
                    value: 0.07,
                    type: "L"
                }
            },
            {
                type: "onion",
                description: "sliced",
                amount: {
                    value: 3,
                    type: "st"
                }
            },
            {
                type: "tomatoe",
                description: "sliced",
                amount: {
                    value: 3,
                    type: "st"
                }
            }
        ],
        instructions: [
            `Mix yogurt, garlic, ginger, garam masala, turmeric, and salt together in a bowl. 
            Add chicken breast; toss to coat evenly. 
            Cover bowl and marinate chicken in the refrigerator, at least 1 hour.`,

            `Place rice in a bowl and add enough water to cover; set aside to soften. 
            Place saffron threads in a small bowl with 1/4 cup water; set aside to bloom.`,

            `Preheat oven to 400 degrees F (200 degrees C). Coat a baking dish with 2 tablespoons olive oil.`,

            `Arrange onions in the prepared baking dish in a single layer. 
            Top onions with marinated chicken breast, reserving marinade. 
            Add 1/2 cup water to the reserved marinade; 
            pour marinade mixture over chicken. Top with tomato slices.`,

            `Bake in the preheated oven until chicken breasts are 
            no longer pink in the center and the juices run clear, 30 to 35 minutes. 
            An instant-read thermometer inserted into the center 
            should read at least 165 degrees F (74 degrees C).`,

            `Bring 6 cups water to a boil in a large pot with cloves, cardamom, cinnamon, and cumin. 
            Drain rice and add to the pot. Bring to a boil and cook until softened but still firm, about 8 minutes.`,

            `Heat remaining 2 tablespoons oil in a skillet over medium heat. 
            Add masala curry sauce; cook and stir until fragrant, about 1 minute. 
            Add parboiled rice and stir to combine, about 1 minute more. 
            Stir in saffron-infused water and 3/4 cup water. 
            Cover, reduce heat to low, and simmer until liquid is absorbed, 5 to 8 minutes. 
            Remove from heat and let stand until rice is fluffy, 5 to 10 minutes.`,

            `Spoon rice onto serving platter; top with chicken breasts, onion, and tomatoes` 
        ]
    }
];

const App = () => (
    <Router>
        <NavbarSection/>
        <Pages pages={pages}/>
    </Router>
);




export default App;