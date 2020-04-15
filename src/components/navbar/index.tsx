import React from 'react';

import AppBar from "@material-ui/core/AppBar";

import ToolBar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";



interface Props {
    readonly items: string[];

    onSignIn: () => void;
    
    onSignUp: () => void;

    onPageChange: (state: Props["items"][0]) => void;
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
                        {props.items.map(item => (
                            <Button 
                            onClick={() => props.onPageChange(item)}
                            key={item}
                            color="inherit">
                                {item}
                            </Button>
                        ))}
                    </div>

                    <div>
                        <Button
                        onClick={props.onSignIn}
                        className={styles.button}
                        variant="contained"
                        color="secondary"
                        endIcon={<AccountCircle/>}>
                            Sign in
                        </Button>
                        
                        <Button
                        onClick={props.onSignUp}
                        variant="contained"
                        color="secondary">
                            Sign up
                        </Button>
                    </div>
            
                </ToolBar>
            </Container>
        </AppBar>
    );
}; 



export default Navbar;