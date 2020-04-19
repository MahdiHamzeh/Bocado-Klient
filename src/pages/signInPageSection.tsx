import React from "react";

import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";

import TextField from "../components/input";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";

import {
    validators
}
from "../utilities";

import {
    RouteComponentProps
}
from "react-router-dom";



const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing() * 4
    },
    form: {
        marginTop: theme.spacing() * 4,
        "&": {
            "& > *": {
                width: "100%",
                maxWidth: theme.spacing() * 70,
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                "&:last-child": {
                    width: "100%",
                    maxWidth: theme.spacing() * 40
                },
                "&:not(:last-child)": {
                    marginBottom: theme.spacing() * 3
                },
                
                "& > *": {
                    width: "100%"
                }
            }
        },
    }
}));
  
const SignInPageSection: React.FC<RouteComponentProps> = props => {
    
    const styles = useStyles();

    const usernameRef = React.useRef<string>("");

    const passwordRef = React.useRef<string>("");

    const onSignInHandler = () => {
        
        const getRefInputValue = (element: any): string => element.current.value;

        console.log({
            username: getRefInputValue(usernameRef),
            password: getRefInputValue(passwordRef)            
        });
    };

    return (        
        <Container 
        className={styles.container}
        maxWidth="md">
            <Typography 
            variant="h4"
            display="block"
            align="center"
            color="secondary"
            gutterBottom>
                Sign In
            </Typography>
            
            <form
            noValidate
            autoComplete="off"
            className={styles.form}>
                <Box>
                    <TextField 
                    validation={validators.isUsername}
                    inputRef={usernameRef}
                    required
                    type="text"
                    label="Username" 
                    variant="filled"/>
                </Box>

                <Box>
                    <TextField 
                    validation={validators.isPassword}
                    inputRef={passwordRef}
                    required
                    type="password"
                    label="password" 
                    variant="filled"/>
                </Box>

                <Box>
                    <Button
                    onClick={onSignInHandler}
                    size="large"
                    variant="contained"
                    color="primary">
                        Sign In
                    </Button>
                </Box>
            </form>      
        </Container>
    );
}



export default SignInPageSection;