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
                "& > *:not(:last-child)": {
                    marginRight: theme.spacing() * 3,
                },
                "& > *": {
                    width: "100%"
                }
            }
        },
    }
}));
  
const SignUpPageSection: React.FC<RouteComponentProps> = props => {

    const styles = useStyles();

    const firstNameRef = React.useRef<string>("");

    const lastNameRef = React.useRef<string>("");

    const usernameRef = React.useRef<string>("");

    const passwordRef = React.useRef<string>("");

    const emailRef = React.useRef<string>("");

    const onSignUpHandler = () => {
        
        const getRefInputValue = (element: any): string => element.current.value;

        console.log({
            firstName: getRefInputValue(firstNameRef),
            lastName: getRefInputValue(lastNameRef),
            username: getRefInputValue(usernameRef),
            password: getRefInputValue(passwordRef),
            email: getRefInputValue(emailRef)       
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
                Sign Up
            </Typography>
            
            <form
            noValidate
            autoComplete="off"
            className={styles.form}>
                <Box>
                    <TextField
                    validation={validators.isName("First name")}
                    inputRef={firstNameRef}
                    required
                    type="text"
                    label="First Name" 
                    variant="filled"/>
                    
                    <TextField 
                    validation={validators.isName("Last name")}
                    inputRef={lastNameRef}
                    required
                    type="text"
                    label="Last Name" 
                    variant="filled"/>
                </Box>

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
                    <TextField 
                    validation={validators.isEmail}
                    inputRef={emailRef}
                    required
                    type="email"
                    label="email" 
                    variant="filled"/>
                </Box>

                <Box>
                    <Button
                    onClick={onSignUpHandler}
                    size="large"
                    variant="contained"
                    color="primary">
                        Sign up and get started !
                    </Button>
                </Box>
            </form>      
        </Container>
    );
}



export default SignUpPageSection;