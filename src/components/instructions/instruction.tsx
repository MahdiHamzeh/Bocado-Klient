import React from "react";

import Box from "@material-ui/core/Box";

import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider";

import makeStyles from "@material-ui/styles/makeStyles";

import { Theme } from "@material-ui/core/";



interface Props {
    index: number;
    instruction: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    instructionText: {
        marginLeft: 8 * 5
    },
}));

const Instruction: React.FC<Props> = ({ index, instruction }) => {
    
    const styles = useStyles();

    return (
        <React.Fragment>
            <Divider/>      
            <ListItem>
                <Box
                display="flex"
                justifyContent="flex-start"
                textAlign="left">

                    <ListItemText 
                    className={styles.instructionText}
                    primary={`${index + 1}.`}/>

                    <ListItemText 
                    className={styles.instructionText}
                    secondary={instruction}/>
                </Box>
            </ListItem>
        </React.Fragment>
    );
}

export default Instruction;