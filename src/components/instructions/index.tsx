import React from "react";

import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import List from "@material-ui/core/List";

import makeStyles from "@material-ui/styles/makeStyles";

import { 
    RecipeWithIngredientsInstructions
}
from "../../App";

import { Theme } from "@material-ui/core/";

import Instruction from "./instruction";



interface Props {
    instructions: RecipeWithIngredientsInstructions["instructions"];
}

const useStyles = makeStyles((theme: Theme) => ({
    instructionTitle: {
        marginBottom: 8 * 1.5
    }
}));

const Instructions: React.FC<Props> = ({ instructions }) => {
    
    const styles = useStyles();

    return (
        <Box>
            <Typography
            className={styles.instructionTitle}
            variant="h5"
            color="secondary">
                Instructions
            </Typography>

            <List
            component="ol">
                {instructions.map((instruction, index) => (
                   <Instruction 
                   
                   key={index}
                   
                   {...{
                       instruction,
                       index
                   }}/>
                ))}
            </List>
        </Box>
    )
}

export default Instructions;