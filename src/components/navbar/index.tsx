import React from 'react';

import AppBar from "@material-ui/core/AppBar";

import ToolBar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";



interface Props {
    readonly pages: string[];

    isSignedIn: boolean;

    onSignIn?: () => void;
    
    onSignUp?: () => void;

    onSignOut?: () => void;

    onAccount?: () => void;

    onPageChange: (state: Props["pages"][0]) => void;
}

const useStyles = makeStyles({
    toolbar: {
        justifyContent: "space-between"
    },
    button: {
        marginRight: "16px"
    }
});

const Navbar: React.FC<Props> = props => {    

    const styles = useStyles();    

    return (
        <AppBar 
        color="primary" 
        position="sticky">
            <Container>
                <ToolBar  
                className={styles.toolbar}>
            
                    <Typography 
                    variant="h6">
                        Bocado
                    </Typography>
                    
                    <div>
                        {props.pages.map(page => (
                            <Button 
                            onClick={() => props.onPageChange(page)}
                            key={page}
                            color="inherit">
                                {page}
                            </Button>
                        ))}
                    </div>

                    <div>
                        {props.isSignedIn &&
                        <Button
                        className={styles.button}
                        variant="contained"
                        color="secondary"
                        endIcon={<AccountCircle/>}>
                            Account
                        </Button>}
                        
                        {props.isSignedIn && 
                        <Button
                        onClick={props.onSignOut}
                        variant="contained"
                        color="secondary">
                            sign out
                        </Button>}

                        {!props.isSignedIn &&
                        <Button
                        onClick={props.onSignIn}
                        className={styles.button}
                        variant="contained"
                        color="secondary">
                            sign in
                        </Button>}
                        
                        {!props.isSignedIn &&
                        <Button
                        onClick={props.onSignUp}
                        variant="contained"
                        color="secondary">
                            Sign up
                        </Button>}
                    </div>
                </ToolBar>
            </Container>
        </AppBar>
    );
}; 



export default Navbar;