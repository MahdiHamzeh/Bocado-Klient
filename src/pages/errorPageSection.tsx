import React from "react";

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    title: {
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
    },
    container: {
        position: "relative",
        height: "500px"
    }
}));

const ErrorPage = () => {

    const styles = useStyles();
    
    return (
        <Container 
        className={styles.container}
        maxWidth="lg">
            <div className={styles.title}>
                <Typography 
                variant="h1"
                display="block"
                align="center"
                color="secondary"
                gutterBottom>
                    404
                </Typography>
                
                <Typography 
                variant="h3"
                display="block"
                align="center"
                color="textSecondary"
                gutterBottom>
                    Page could not be found
                </Typography>
            </div>
        </Container>
    );
}

export default ErrorPage;