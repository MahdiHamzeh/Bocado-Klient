import React from "react";

import Box from "@material-ui/core/Box";

import makeStyles from "@material-ui/core/styles/makeStyles";

import Ingredient from "./ingredient";

import Typography from "@material-ui/core/Typography";

import { 
    RecipeWithIngredientsInstructions
}
from "../../App";



interface Props {
    ingredients: RecipeWithIngredientsInstructions["ingredients"];
}

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing() * 3
    },
    ingredients: {
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
        gridGap: theme.spacing() * 3,
        justifyContent: "center",
        alignContent: "center",
        marginBottom: theme.spacing() * 3.5
    }
}));

const Ingredients: React.FC<Props> = ({ ingredients }) => {

    const styles = useStyles();

    return (
        <Box>
            <Typography
            className={styles.title}
            variant="h5"
            color="secondary">
                Ingredients
            </Typography>

            <Box
            className={styles.ingredients}>
                {ingredients.map((ingredient, index) => (
                    <Ingredient 
                    key={index}
                    ingredient={ingredient}/>
                ))}   
            </Box>
        </Box>
    )
}

export default Ingredients;