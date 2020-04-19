import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles"

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

import CardContent from "@material-ui/core/CardContent";

import CardHeader from "@material-ui/core/CardHeader";

import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";



export interface RecipeProps {
    // Name of the recipe
    name: string;
    
    // Path to the image
    image: string;
    
    title: string;

    description: string;

    // Time in minutes
    time: number;

    date: Date;

    onClick: () => void;
}

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '50%'
    },
    buttonContainer: {
        justifyContent: "center"
    },
    button: {
        flex: 1
    }
});

const Recipe: React.FC<RecipeProps> = props => {
    const styles = useStyles();

    const dateStr = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    .format(props.date);

    return (
        <Card raised>
            <CardHeader
            title={props.title}
            subheader={dateStr}>
            </CardHeader>

            <CardMedia
            className={styles.media}
            title={props.name}
            image={props.image}/>
            
            <CardContent>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">
                    {props.description}
                </Typography>
            </CardContent>
            
            <CardActions
            className={styles.buttonContainer}>
                <Button
                className={styles.button} 
                onClick={props.onClick}
                color="secondary"
                variant="contained">
                    visit recipe
                </Button>    
            </CardActions>
        </Card>
    );
}



export default Recipe;