import React from "react";

import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Checkbox from "@material-ui/core/Checkbox";

import { 
    RecipeWithIngredientsInstructions
}
from "../../App";



interface Props {
    ingredient: RecipeWithIngredientsInstructions["ingredients"][0];
}

const useStyles = makeStyles({
    ingredientContent: {
        display: "flex",
        alignItems: "center"
    }
});

const Ingredients: React.FC<Props> = ({ ingredient }) => {

    const styles = useStyles();

    const {
        type,
        description,
        amount: {
            value: amuntValue,
            type: amountType
        }
    } = ingredient;

    return (
        <Card>
            <CardContent 
            className={styles.ingredientContent}>
                <Checkbox/>

                <Typography 
                color="textSecondary">
                    {`${amuntValue}${amountType} ${description || ""} ${type}s`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Ingredients;