import React from "react";

import Navbar from "../components/navbar"

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";

import SearchBar from "../components/searchbar";

import Recipes from "../components/recipes";

import { 
    RecipeWithIngredients
}
from "../components/recipes/";

import * as images from "../images";


const recipes: RecipeWithIngredients[] = [
    {
        name: "Biryani",   
        
        image: images.biryani,
        
        title: "Biryani",
    
        description: "One of the moste delicious dishes Birayni",
    
        time: 60,
    
        date: new Date(),
    
        ingredients: [
            "ris",
            "kött",
            "youghourt"
        ]
    },
    
    {
        name: "kebab",   
        
        image: images.kebab,
        
        title: "Kebab",
    
        description: "Kebab the gem of middleeast",
    
        time: 60,
    
        date: new Date(),
    
        ingredients: [
            "kött"
        ]
    },
    
    {
        name: "schnitzel",   
        
        image: images.schnitzel,
        
        title: "schnitzel",
    
        description: "Beloved by germans",
    
        time: 60,
    
        date: new Date(),
    
        ingredients: [
            "kyckling"
        ]
    },

    {
        name: "pealla",   
        
        image: images.pealla,
        
        title: "pealla",
    
        description: "The spanish national dish",
    
        time: 20,
    
        date: new Date(),
    
        ingredients: [
            "ris"
        ]
    }
];


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

type ItemsType = [
    "contact us", 
    "about us", 
    "policies"
];
  
const FrontPage = () => {
    
    const items: ItemsType = [
        "contact us",
        "about us",
        "policies"
    ];

    const styles = useStyles();

    const [searchText, setSearchText] = React.useState<string | null>(null);

    return (
        <React.Fragment>
            <Navbar 
            onPageChange={state => {
                console.log(state);
            }}
            onSignIn={() => {
                console.log("sign in");
            }}
            onSignUp={() => {
                console.log("sign up");
            }}
            items={items}/>
            
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
                    search={searchText}
                    recipes={recipes}/>
                </div>
            </Container>
        </React.Fragment>
    );
}



export default FrontPage;