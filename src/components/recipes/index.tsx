import React from "react";

import Box from "@material-ui/core/Box";

import Recipe, {
    RecipeProps
} 
from "./recipe";

import {
    motion 
}
from "framer-motion";

import makeStyles from "@material-ui/core/styles/makeStyles";



const animations = {
    container: {
        hidden: {
            opacity: 1,
            scale: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.2
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    },
    item: {
        mountInOrOut: {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1
            }
        },
        whileHover: {
            scale: 1.05
        }
    },
}

export interface Ingredient {
    type: string,
    description?: string,
    amount: {
        value: number,
        type: (
            ("L" |"Dl"| "Cl")
            | ("Kg" | "Hg" | "G")
            | ("st")
        )
    }
};

export interface RecipeWithIngredients extends Omit<RecipeProps, "onClick"> {
    ingredients: Array<Ingredient>;
}

interface Props {
    recipes: Array<RecipeWithIngredients>;
    search: string | null;
    onToRecipe: (recipe: RecipeWithIngredients) => void;
}

const useStyles = makeStyles(theme => {
    
    const spacing = theme.spacing();

    return {
        container: {
            display: "grid",
            paddingTop: spacing * 4,
            paddingBottom: spacing * 3,
            gridRowGap: spacing * 2,
            gridColumnGap: spacing * 4,
            gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
            justifyItems: "center"
        },
        recipeContainer: {
            width: "300px"
        }
    };
});

const Recipes: React.FC<Props> = props => {

    const styles = useStyles();

    const filterdRecipes = filterRecipesByIngredients(props.recipes, props.search);

    const onClickHandler = (index: number) => {
        
        const recipe = filterdRecipes[index];

        props.onToRecipe(recipe);
    };

    return (
        <motion.div
        variants={animations.container}
        initial="hidden"
        animate={"visible"}>
            <Box
            className={styles.container}>
                {filterdRecipes.map((recipe, index) => {
                    
                    const recipePropsArgs = {
                        ...recipe
                    };

                    return (
                        <motion.div
                        key={index}
                        variants={animations.item.mountInOrOut}
                        whileHover={animations.item.whileHover}>
                            <Box
                            className={styles.recipeContainer}>
                                <Recipe
                                {...recipePropsArgs}
                                key={index}
                                onClick={() => onClickHandler(index)}/>
                            </Box>
                        </motion.div>
                    )
                })}
            </Box>     
        </motion.div>
    ); 
}

export function filterRecipesByIngredients(recipes: Props["recipes"], search: Props["search"]): Props["recipes"] {
    if (!search) {
        return recipes
    }
    else {

        const searchWords = search.split(" ");

        const filterdRecipes = recipes.filter(recipe => {
            
            let hasAllIngridients = true;

            for (const searchWord of searchWords) {

                const hasIngridient = (
                    recipe
                    .ingredients
                    .map(ingredient => ingredient.type)
                    .includes(searchWord)
                );

                hasAllIngridients = hasAllIngridients && hasIngridient;

                if (!hasAllIngridients) return false;
            }

            return hasAllIngridients;
        });      

        return filterdRecipes;
    }
}



export default Recipes;