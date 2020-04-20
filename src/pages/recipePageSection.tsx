import React from "react";

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import IconButton from "@material-ui/core/IconButton"

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import makeStyles from "@material-ui/core/styles/makeStyles";

import Ingredients from "../components/ingredients";

import Instructions from "../components/instructions";

import { 
    recipes
}
from "../App";

import {
    RouteComponentProps
}
from "react-router-dom";



const useStyles = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing() * 4
    },
    container: {
        justifyContent: "center"
    },
    recipeContainer: {
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
        paddingTop: theme.spacing() * 4

    },
    goBackBtn: {
        marginRight: theme.spacing() * 3
    },
    recipe: {
        width: 750,
        "& > *:not(:last-child)": {
            marginBottom: theme.spacing() * 9
        }
    },
    recipeImage: {
        paddingTop: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    }
}));

interface Params {
    id: string;
}

const RecipePageSection: React.FC<RouteComponentProps<Params>> = props => {

    const styles = useStyles();

    const activeRecipe = recipes.find(recipe => recipe.name.toLowerCase() === props.match.params.id)

    const isValidId = activeRecipe?.name !== undefined;

    React.useEffect(() => {
        if (!isValidId) {
            props.history.replace("/404")
        }
    });

    const goBackHandler = () => {
        props.history.goBack();
    }
    
    return activeRecipe ? (
        <Container 
        className={styles.container}
        maxWidth="md">
            <Typography 
            className={styles.title}
            variant="h3"
            display="block"
            align="center"
            color="secondary"
            gutterBottom>
                {activeRecipe.name.toUpperCase()}
            </Typography>

            <Box 
            className={styles.recipeContainer}>
                <Box className={styles.goBackBtn}>
                    <IconButton
                    onClick={goBackHandler}
                    color="primary">
                        <ArrowBackIcon/>
                    </IconButton>
                </Box>

                <Box
                className={styles.recipe}>
                    <Box>
                        <Typography 
                        gutterBottom
                        color="textSecondary">
                            {activeRecipe.description}
                        </Typography>

                        <div 
                        style={{
                            backgroundImage: `url("${activeRecipe.image}")`
                        }}
                        className={styles.recipeImage}>
                        </div>
                    </Box>
                    
                    <Ingredients 
                    ingredients={activeRecipe.ingredients}/>

                    <Instructions 
                    instructions={activeRecipe.instructions}/>
                </Box>
            </Box>
        </Container>
    ) : null;
}

export default RecipePageSection;