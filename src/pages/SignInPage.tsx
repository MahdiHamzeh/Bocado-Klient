import React from "react";

import Navbar from "../components/navbar"

import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";

import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";


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

type ItemsType = [
    "contact us", 
    "about us", 
    "policies"
];
  
const FrontPage = () => {

    const pages: ItemsType = [
        "contact us",
        "about us",
        "policies"
    ]

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
        <React.Fragment>
            <Navbar 
            isSignedIn={false}
            onSignIn={() => {
            }}
            onPageChange={page => {
            }}
            pages={pages}/>
            
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
                        inputRef={usernameRef}
                        required
                        type="text"
                        label="Username" 
                        variant="filled"/>
                    </Box>

                    <Box>
                        <TextField 
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
        </React.Fragment>
    );
}



export default FrontPage;