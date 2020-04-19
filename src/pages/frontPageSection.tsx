import React from "react";

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";

import SearchBar from "../components/searchbar";

import Recipes, { 
    RecipeWithIngredients
}
from "../components/recipes";

import {
    RouteComponentProps
}
from "react-router-dom";

import {
    recipes
}
from "../App";



const useStyles = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing() * 4
    },
    searchbar: {
        marginTop: theme.spacing() * 4,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 600
    },
    container: {
        justifyContent: "center"
    }
}));

const FrontPageSection: React.FC<RouteComponentProps> = props => {

    const styles = useStyles();

    const [searchText, setSearchText] = React.useState<string | null>(null);

    return (    
        <Container 
        className={styles.container}
        maxWidth="md">
            <Typography 
            className={styles.title}
            variant="h4"
            display="block"
            align="center"
            color="secondary"
            gutterBottom>
                Search
            </Typography>
            
            <div 
            className={styles.searchbar}>
                <SearchBar
                onChange={event => {
                    const searchText: string | null = event.target.value || null;

                    setSearchText(searchText);
                }}/>
            </div>

            <div>
                <Recipes
                onToRecipe={(recipe: RecipeWithIngredients) => {
                    props.history.push(`/recipes/${recipe.name.toLowerCase()}`)
                }}
                search={searchText}
                recipes={recipes}/>
            </div>
        </Container>
    );
}



export default FrontPageSection;